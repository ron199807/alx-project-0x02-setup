import { NextPage } from "next";
import { Header } from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">About Page</h1>
      
      <div className="flex flex-col space-y-4 max-w-md">
        <Button 
          size="small" 
          shape="rounded-sm"
          onClick={() => console.log('Small button clicked')}
        >
          Small Rounded-sm Button
        </Button>
        
        <Button 
          size="medium" 
          shape="rounded-md"
          onClick={() => console.log('Medium button clicked')}
        >
          Medium Rounded-md Button
        </Button>
        
        <Button 
          size="large" 
          shape="rounded-full"
          onClick={() => console.log('Large button clicked')}
        >
          Large Rounded-full Button
        </Button>
      </div>
    </div>
  );
};

export default About