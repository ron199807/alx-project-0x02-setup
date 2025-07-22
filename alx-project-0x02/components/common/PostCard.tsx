import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="post-card border rounded-lg p-4 mb-4 shadow-sm">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{content}</p>
      <p className="text-sm text-gray-400">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;