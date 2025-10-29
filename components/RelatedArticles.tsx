
import React, { useMemo } from 'react';
import type { Topic } from '../types.ts';

interface RelatedArticlesProps {
  allTopics: Topic[];
  currentTopicId: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ allTopics, currentTopicId }) => {
  const relatedTopics = useMemo(() => {
    const candidates = allTopics.filter(
      topic => topic.id !== currentTopicId && topic.id !== 'home'
    );
    
    // Simple shuffle
    for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }
    return candidates.slice(0, 3);
  }, [allTopics, currentTopicId]);

  if (relatedTopics.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 pt-12 border-t border-gray-200 dark:border-neutral-700">
      <h2 className="text-3xl font-bold font-sans text-gray-900 dark:text-neutral-100 mb-6">関連記事</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedTopics.map(topic => (
          <a
            key={topic.id}
            href={`#${topic.id}`}
            className="group bg-white dark:bg-neutral-800/50 rounded-lg shadow-sm border border-gray-200 dark:border-neutral-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col no-underline"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold font-sans text-gray-900 dark:text-neutral-100">{topic.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-300 leading-relaxed">
                {topic.summary || '概要は準備中です。'}
              </p>
            </div>
            <div className="p-6 pt-2 mt-auto">
                <span className="font-sans font-semibold text-sm text-gray-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white">
                    続きを読む &rarr;
                </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;