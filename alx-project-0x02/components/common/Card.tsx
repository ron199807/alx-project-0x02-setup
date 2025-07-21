import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{content}</p>
      </div>
      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin: 16px;
          padding: 16px;
          max-width: 300px;
        }
        .card-header {
          margin-bottom: 12px;
        }
        .card-header h3 {
          margin: 0;
          color: #333;
        }
        .card-body p {
          margin: 0;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default Card;