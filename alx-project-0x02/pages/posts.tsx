import React from 'react';
import Header from '@/components/layout/Header';

const PostsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Posts Page</h1>
        <p className="text-lg">Here you can see all our posts.</p>
      </main>
    </div>
  );
};

export default PostsPage;