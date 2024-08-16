import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [search] = useSearchParams();
  const [id] = search?.get('id');

  useEffect(() => {
    if (id) {
      const redirect = () => {
        return setTimeout(() => {
          window.location.href = 'https://www.google.com/id';
        }, 5000);
      };
      redirect();
    }
  }, [id]);

  return (
    <div className="home">
      <img
        className="App-logo"
        src="https://cdn-icons-png.flaticon.com/512/3980/3980962.png"
        alt="load"
      />
      <p>Validating The Details</p>
    </div>
  );
};

export default Home;
