
import React, { useState, useMemo, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import Content from './components/Content.tsx';
import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import { topics } from './constants/topics.ts';
import type { Topic } from './types.ts';

export type Theme = 'light' | 'dark' | 'system';

const BASE_URL = "https://physics-mathematics-world.netlify.app/";
const SITE_NAME = "物理数学の世界";
const DEFAULT_DESCRIPTION = "行列、テイラー展開、フーリエ解析など、物理学で用いられる重要な数学の概念を分かりやすく解説するインタラクティブな学習サイトです。";


const App: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'system');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle routing based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
        const hash = window.location.hash.substring(1);
        const topicExists = topics.some(t => t.id === hash);
        const newTopicId = topicExists ? hash : 'home';
        setActiveTopicId(newTopicId);
        // Scroll to top on page change
        window.scrollTo(0, 0);
    };

    handleHashChange(); // Initial load
    window.addEventListener('hashchange', handleHashChange);
    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const activeTopic = useMemo(
    () => topics.find(topic => topic.id === activeTopicId) || topics.find(t => t.id === 'home') as Topic,
    [activeTopicId]
  );
  
  // Update meta tags for SEO
  useEffect(() => {
    if (activeTopic) {
      const isHome = activeTopic.id === 'home';
      const title = isHome ? SITE_NAME : `${activeTopic.title} | ${SITE_NAME}`;
      const description = activeTopic.summary || DEFAULT_DESCRIPTION;
      const url = isHome ? BASE_URL : `${BASE_URL}#${activeTopic.id}`;

      document.title = title;
      document.getElementById('meta-description')?.setAttribute('content', description);
      document.getElementById('canonical-url')?.setAttribute('href', url);
      
      // OGP Tags
      document.getElementById('og-title')?.setAttribute('content', title);
      document.getElementById('og-description')?.setAttribute('content', description);
      document.getElementById('og-url')?.setAttribute('content', url);

      // Twitter Tags
      document.getElementById('twitter-title')?.setAttribute('content', title);
      document.getElementById('twitter-description')?.setAttribute('content', description);
      document.getElementById('twitter-url')?.setAttribute('content', url);
    }
  }, [activeTopic]);
  
  const filteredTopics = useMemo(() => {
    return topics.filter(topic => 
      topic.id !== 'home' &&
      (
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.summary?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="flex flex-col md:flex-row h-full font-serif bg-gray-50 dark:bg-neutral-800 text-gray-800 dark:text-neutral-200">
      <Sidebar 
        topics={filteredTopics} 
        activeTopicId={activeTopicId} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title={activeTopic.title} 
          theme={theme}
          setTheme={setTheme}
        />
        <div className="flex-1 overflow-y-auto px-6 md:px-12 py-6 md:py-10">
          {activeTopicId === 'home' ? (
            <Home topics={filteredTopics} />
          ) : (
            <Content
              key={activeTopicId} // Add key to re-trigger animation on change
              topic={activeTopic}
              allTopics={topics}
              activeTopicId={activeTopicId}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;