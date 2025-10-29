import React, { useEffect, useRef, useState } from 'react';
import type { Topic } from '../types';
import RelatedArticles from './RelatedArticles';
import TableOfContents, { type Heading } from './TableOfContents';

interface ContentProps {
  topic: Topic;
  allTopics: Topic[];
  activeTopicId: string;
}

const Content: React.FC<ContentProps> = ({ topic, allTopics, activeTopicId }) => {
  const articleRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const article = articleRef.current;
    if (!article) return;

    const headingElements = article.querySelectorAll('h2, h3');
    const newHeadings: Heading[] = Array.from(headingElements).map((el, index) => {
      const element = el as HTMLHeadingElement;
      const text = element.innerText;
      const level = parseInt(element.tagName.substring(1), 10);
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') + `-${index}`;
      element.id = id;
      return { id, text, level };
    });
    setHeadings(newHeadings);
  }, [topic]);

  return (
    <div className="w-full flex justify-center content-fade-in">
        <div className="flex w-full max-w-7xl">
            <div className="flex-grow min-w-0">
              <div ref={articleRef} className="max-w-4xl mx-auto">
                <article className="prose-lg prose-p:leading-relaxed prose-h2:font-sans prose-h3:font-sans dark:prose-invert prose-h2:dark:text-neutral-100 prose-h3:dark:text-neutral-200 prose-h4:dark:text-neutral-300 prose-strong:dark:text-white">
                  {topic.content}
                </article>
              </div>
              <div className="max-w-4xl mx-auto">
                <RelatedArticles
                  allTopics={allTopics}
                  currentTopicId={activeTopicId}
                />
              </div>
            </div>
            <div className="hidden xl:block w-64 flex-shrink-0 ml-10">
                <TableOfContents headings={headings} />
            </div>
        </div>
    </div>
  );
};

export default Content;