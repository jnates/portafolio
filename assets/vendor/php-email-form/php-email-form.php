<?php
/**
* PHP Email Form Class
* A simple PHP class to send email messages.
* https://bootstraptemple.com
*/

class PHP_Email_Form {

  public $to;
  public $from_name;
  public $from_email;
  public $subject;
  public $message;
  public $headers = array();
  public $smtp = array();

  public $debug = false;
  public $debug_error = array();

  public $ajax = false;

  private $error = array();

  public function __construct() {
    $this->headers[] = 'MIME-Version: 1.0';
    $this->headers[] = 'Content-type: text/html; charset=utf-8';
  }

  public function send() {

    if ($this->to && $this->from_name && $this->from_email && $this->subject && $this->message) {
      $this->headers[] = "To: $this->to <$this->to>";
      $this->headers[] = "From: $this->from_name <$this->from_email>";
      $this->headers[] = "Reply-To: $this->from_name <$this->from_email>";
      $this->headers[] = "Subject: $this->subject";

      $email_message = '<html><body>';
      $email_message .= $this->message;
      $email_message .= '</body></html>';

      if (isset($this->smtp) && is_array($this->smtp)) {
        $error = $this->smtp_send($email_message);
      } else {
        $error = $this->mail_send($email_message);
      }

      if (!$error) {
        if ($this->ajax) {
          return 'OK';
        } else {
          header('Location: ' . $_SERVER['HTTP_REFERER']);
          exit();
        }
      } else {
        $this->error[] = $error;
      }
    } else {
      $this->error[] = 'All fields are required.';
    }

    if ($this->ajax) {
      return implode('<br>', $this->error);
    } else {
      header('Location: ' . $_SERVER['HTTP_REFERER']);
      exit();
    }
  }

  public function add_message($message, $name = '') {
    $this->message .= '<p>'. $name . $message .'</p>';
  }

  public function set_error($error) {
    $this->error[] = $error;
  }

  private function smtp_send($message) {
    require_once('class.phpmailer.php');

    $mail = new PHPMailer();

    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = $this->smtp['host'];
    $mail->Port = $this->smtp['port'];
    $mail->Username = $this->smtp['username'];
    $mail->Password = $this->smtp['password'];

    $mail->setFrom($this->from_email, $this->from_name);
    $mail->addAddress($this->to);

    foreach ($this->headers as $header) {
      $mail->addCustomHeader($header);
    }

    $mail->Subject = $this->subject;
    $mail->Body    = $message;
    $mail->AltBody = strip_tags(str_replace('<br>', "\n", $message));

    if (!$mail->send()) {
      $this->debug_error[] = $mail->ErrorInfo;
      return $mail->ErrorInfo;
    } else {
      return
?>