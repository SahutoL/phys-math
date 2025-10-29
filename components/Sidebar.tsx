import React from 'react';
import type { Topic } from '../types';

interface SidebarProps {
  topics: Topic[];
  activeTopicId: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ topics, activeTopicId, isMenuOpen, setIsMenuOpen, searchTerm, setSearchTerm }) => {

  return (
    <aside className="relative md:static w-full md:w-72 flex-shrink-0 bg-white dark:bg-neutral-900 border-b md:border-b-0 md:border-r border-gray-200 dark:border-neutral-700 flex flex-col z-10">
      <div 
        className="p-4 md:p-6 flex justify-between items-center flex-shrink-0"
      >
        <a href="#" className="cursor-pointer" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
          <h2 className="text-2xl font-bold font-sans text-gray-900 dark:text-neutral-100">物理数学の世界</h2>
          <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1">Physics & Mathematics</p>
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-500 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:focus:ring-neutral-500"
          aria-label="ナビゲーションメニューを開閉する"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      <div className="px-4 md:px-6 mb-4 flex-shrink-0">
        <input
          type="text"
          placeholder="記事を検索..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 text-base font-sans bg-gray-50 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 overflow-y-auto">
        <nav className="p-2 md:p-4 w-full">
          {topics.length > 0 ? (
            <ul>
              {topics.map(topic => (
                <li key={topic.id}>
                  <a
                    href={`#${topic.id}`}
                    className={`block w-full text-left px-4 py-2 my-1 rounded-md text-base transition-all duration-200 font-sans ${
                      activeTopicId === topic.id
                        ? 'bg-black text-white dark:bg-white dark:text-black font-semibold'
                        : 'text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {topic.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 text-gray-500 dark:text-neutral-400 font-sans">検索結果がありません。</p>
          )}
        </nav>
      </div>

      {/* Mobile Menu (Overlay) */}
      <div 
        id="mobile-menu"
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-700 shadow-lg z-20 max-h-[calc(100vh-140px)] overflow-y-auto`}
      >
        <nav className="p-2">
           {topics.length > 0 ? (
            <ul>
              {topics.map(topic => (
                <li key={topic.id}>
                  <a
                    href={`#${topic.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-4 py-2 my-1 rounded-md text-base transition-colors duration-200 font-sans ${
                      activeTopicId === topic.id
                        ? 'bg-gray-100 dark:bg-neutral-800 text-black dark:text-white font-semibold'
                        : 'text-gray-600 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-800/50 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {topic.title}
                  </a>
                </li>
              ))}
            </ul>
           ) : (
            <p className="p-4 text-gray-500 dark:text-neutral-400 font-sans">検索結果がありません。</p>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;