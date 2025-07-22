import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="user-card border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Phone:</span> {phone}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Website:</span> {website}
      </p>
      
      <div className="mt-4 border-t pt-3">
        <h3 className="font-semibold text-lg mb-1">Address</h3>
        <p className="text-gray-600">
          {address.street}, {address.suite}
        </p>
        <p className="text-gray-600">
          {address.city}, {address.zipcode}
        </p>
      </div>
      
      <div className="mt-3 border-t pt-3">
        <h3 className="font-semibold text-lg mb-1">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-gray-500 text-sm italic">"{company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;