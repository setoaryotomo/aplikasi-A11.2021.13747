import React, { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-3">
      <h2>Fetched Data</h2>
      <ul className="list-group">
        {data.slice(0, 3).map(item => (
          <li key={item.id} className="list-group-item">
            <h5>{item.title}</h5>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;