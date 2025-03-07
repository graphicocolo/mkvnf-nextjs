'use client';

import React, { useEffect } from 'react';

import useDataStore from '@/stores/dataStore';

const DataList = () => {
  const { data, fetchData } = useDataStore();

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
