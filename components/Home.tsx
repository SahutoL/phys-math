import React from 'react';
import type { Topic } from '../types';

interface HomeProps {
  topics: Topic[];
}

const Home: React.FC<HomeProps> = ({ topics }) => {
  return (
    <div className="max-w-7xl mx-auto content-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-sans text-gray-900 dark:text-neutral-100">物理数学の世界へようこそ</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-neutral-300">物理学にて扱われる数学を網羅的に理解しよう．</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {topics.map(topic => (
          <a
            key={topic.id}
            href={`#${topic.id}`}
            className="group bg-white dark:bg-neutral-800/50 rounded-lg shadow-sm border border-gray-200 dark:border-neutral-700 hover:shadow-xl hover:border-black dark:hover:border-white hover:-translate-y-1 transition-all duration-300 flex flex-col no-underline"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold font-sans text-gray-900 dark:text-neutral-100">{topic.title}</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-neutral-300 leading-relaxed">
                {topic.summary || '概要は準備中です。'}
              </p>
            </div>
            <div className="p-6 pt-0">
                <span className="font-sans font-semibold text-gray-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                    記事を読む &rarr;
                </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;