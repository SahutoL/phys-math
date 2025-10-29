import React, { useState, useEffect, useRef } from 'react';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveId(entry.target.id);
            }
        });
    }, {
        rootMargin: '0% 0% -80% 0%', // Highlight when heading is in the top 20% of the viewport
        threshold: 0.1
    });

    observerRef.current = observer;

    const elements = headings.map(h => document.getElementById(h.id)).filter(el => el !== null) as Element[];
    elements.forEach(el => observer.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-24">
      <h2 className="text-lg font-bold font-sans text-gray-800 dark:text-neutral-200 mb-4">目次</h2>
      <ul className="space-y-2">
        {headings.map(heading => (
          <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm transition-colors duration-200 font-sans border-l-2
                ${ activeId === heading.id
                    ? 'border-black dark:border-white text-black dark:text-white font-semibold'
                    : 'border-transparent text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }
                pl-4 py-1
              `}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;