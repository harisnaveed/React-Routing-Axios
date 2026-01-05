import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
      <div>
          {
              data ? data.map(post => (
                <p key={post.id}>Title: {post.title}</p>
              )) : <p>Loading...</p>
          }
    </div>
  );
}

export default Test;
