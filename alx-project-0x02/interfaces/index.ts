export interface ButtonProps {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    className?: string;
    onClick?: () => void;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface Post {
  title: string;
  content: string;
}

export interface PostProps {
   id: number;
  title: string;
  content: string;
  userId: number;
}