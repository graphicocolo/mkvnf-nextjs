'use client';

import React, { useEffect, useState } from 'react';

interface User {
  name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data.map((user: { name: string }) => user.name));
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
};

export default UserList;
