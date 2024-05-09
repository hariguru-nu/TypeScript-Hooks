import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

interface ApiDataType {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const Application = () => {
  const [data, setData] = useState<ApiDataType[]>([]);

  const result = useFetch('https://jsonplaceholder.typicode.com/todos');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultData = await result;
        setData(resultData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Here is the Data received from the API</p>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <p>
              <span>Item Id: <strong>{item.id}</strong></span><br />
              <span>Completed: <strong>{item.completed ? 'Yes' : 'No'}</strong></span><br />
              <span>Title: <strong>{item.title}</strong></span><br />
              <span>User Id: <strong>{item.userId}</strong></span>
            </p>
          </div>
        ))
      ) : (
        <p>Loading Data....</p>
      )}
    </div>
  );
};

export default Application;
