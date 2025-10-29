import React, { useMemo } from 'react';
import katex from 'katex';

interface MathDisplayProps {
  mathString: string;
  displayMode?: boolean;
}

const MathDisplay: React.FC<MathDisplayProps> = ({ mathString, displayMode = false }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(mathString, {
        displayMode,
        throwOnError: false,
        errorColor: '#D8000C',
      });
    } catch (error) {
      console.error(`KaTeX critical rendering error for string "${mathString}":`, error);
      return `<span style="color: #D8000C;">KaTeX Error</span>`;
    }
  }, [mathString, displayMode]);

  if (displayMode) {
    return <div className="not-prose block my-4 text-center" dangerouslySetInnerHTML={{ __html: html }} />;
  }
  
  return <span className="not-prose" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MathDisplay;