import React from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';
import Header from '@/components/layout/Header';

interface UsersPageProps {
  users: UserProps[];
  error?: string;
}

const UsersPage: React.FC<UsersPageProps> = ({ users, error }) => {
  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <Header />
      <h1 className="text-3xl font-bold mb-8">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    const users = await response.json();
    
    return {
      props: {
        users,
      },
      revalidate: 3600,
    };
  } catch (err) {
    return {
      props: {
        users: [],
        error: err instanceof Error ? err.message : 'An unknown error occurred',
      },
    };
  }
}

export default UsersPage;