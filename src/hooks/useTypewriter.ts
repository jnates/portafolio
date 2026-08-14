import { useEffect, useState } from "react";

interface TypewriterOptions {
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
}

/** Cycles through `words` with a typewriter effect and returns the current text. */
export function useTypewriter(
  words: readonly string[],
  { typeMs = 85, deleteMs = 40, holdMs = 1500 }: TypewriterOptions = {}
): string {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const hold = window.setTimeout(() => setDeleting(true), holdMs);
      return () => window.clearTimeout(hold);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
    const timeout = window.setTimeout(() => setText(next), deleting ? deleteMs : typeMs);
    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
}
