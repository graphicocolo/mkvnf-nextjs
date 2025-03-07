'use client';

import { useState } from 'react';

import useAppStore from '@/stores/appStore';

const UserInfo = () => {
  const { user, updateUser } = useAppStore();
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');

  const handleUpdate = () => {
    if (name && age) {
      updateUser(name, Number(age));
      setName('');
      setAge('');
    }
  };

  return (
    <div className="mt-4 rounded border p-4 shadow">
      <h2 className="mb-4 text-xl font-semibold">User Info</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <input
        className="mb-2 w-full rounded border p-2"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        type="text"
        value={name}
      />
      <input
        className="mb-2 w-full rounded border p-2"
        onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')}
        placeholder="Enter age"
        type="number"
        value={age}
      />
      <button className="rounded bg-green-500 px-4 py-2 text-white" onClick={handleUpdate}>
        Update User
      </button>
    </div>
  );
};

export default UserInfo;
