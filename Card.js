import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ fruit }) => {
  return (
    <Link
      to={`/fruit/${fruit.id}`}
      state={{
        fruit: fruit,
      }}
      className='links'
    >
      <div className='card2'>
        <div className='card'>
          <img src={fruit.url} alt={fruit.name} />
        </div>
        <div className='card3'>
          <h3> Name : {fruit.name}</h3>
          <h4>Genus : {fruit.genus}</h4>
 
        </div>
      </div>
    </Link>
  );
};

export default Card;
