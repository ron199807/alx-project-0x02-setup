// pages/home.tsx
import React, { useState } from 'react';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import Header from '@/components/layout/Header';

interface Post {
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    { title: 'First Card', content: 'This is the content for the first card component.' },
    { title: 'Second Card', content: 'Here\'s some different content for the second card.' }
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="p-5">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Welcome to Our App</h1>
      <button 
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors mb-5"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Post
      </button>
      <div className="flex flex-wrap justify-center gap-4">
        {posts.map((post, index) => (
          <Card 
            key={index}
            title={post.title} 
            content={post.content} 
          />
        ))}
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;