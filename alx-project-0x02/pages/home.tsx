import React from 'react';
import { Header } from "@/components/layout/Header";
import Card from '../components/common/Card';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
        <Header />
      <h1 className='text-center'>Welcome Home</h1>
      <div className="cards-container">
        <Card 
          title="First Card" 
          content="This is the content for the first card component." 
        />
        <Card 
          title="Second Card" 
          content="Here's some different content for the second card." 
        />
        <Card 
          title="Third Card" 
          content="And finally, this is the third card with its own content." 
        />
      </div>
      <style jsx>{`
        .home-container {
          padding: 20px;
        }
        .cards-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default HomePage;