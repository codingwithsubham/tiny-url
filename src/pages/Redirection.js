import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Redirection = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const redirect = () => {
        return setTimeout(() => {
          window.location.href = `https://eforms.moolchandhealthcare.com/service/f/${id}`;
        }, 100);
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

export default Redirection;
