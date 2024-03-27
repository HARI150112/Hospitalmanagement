import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/1/');
      const jsonData = await response.json();
      setData(jsonData);

      
    } catch (error) {
        setError(error.message);
      console.error('Error fetching data:', error);
    }
  };
  console.log(data,"data");
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>

      <ul>
      {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
           
    </div>
  );
}

export default Home;
