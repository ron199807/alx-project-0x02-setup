export interface ButtonProps {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    className?: string;
    onClick?: () => void;
};

export interface CardProps {
  title: string;
  content: string;
};

export interface Post {
  title: string;
  content: string;
};

export interface PostProps {
   id: number;
  title: string;
  content: string;
  userId: number;
};

// user properties
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}