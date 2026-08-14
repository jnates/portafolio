import { site } from "../../config/site";
import Section from "../ui/Section";
import ButtonGroup from "../ui/ButtonGroup";

export default function Contact() {
  const { contact } = site;

  return (
    <Section id="contact" kicker={contact.kicker} title={contact.title} center>
      <p className="contact__lead">{contact.lead}</p>
      <ButtonGroup links={contact.ctas} className="contact__actions" />
    </Section>
  );
}
