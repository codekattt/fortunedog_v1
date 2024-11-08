import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import 'react-typist/dist/Typist.css';

interface TypingEffectProps {
  text: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 25); 
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return <ReactMarkdown className="markdown">{displayedText}</ReactMarkdown>;
};

export default TypingEffect;
