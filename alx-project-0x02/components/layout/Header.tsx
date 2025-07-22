// components/layout/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">
            <Link href="/home" className="hover:text-gray-300 transition-colors">
              My App
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link 
              href="/home" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/posts" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Posts
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;