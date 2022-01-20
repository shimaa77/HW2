import React, { useState } from 'react';
import Card from '../Components/Card';
import Data from '../fruits';
const Home = () => {
  console.log(Data);
  const [filterdFruit, setFilterdFruits] = useState(Data);
  const [query, setQuery] = useState('');
  const handleValueChange = (e) => {
    setQuery(e.target.value);
    const filterdFruits = Data.filter((fruit) => {
      const Name = fruit.name
        .toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      const Family = fruit.family
        .toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      return Name ? Name : Family;
    });
    setFilterdFruits(filterdFruits);
  };
  return (
    <div>
      <form className='search__form'>
        <input
          placeholder='Search Bar'
          type='text'
          className='search__btn'
          onChange={handleValueChange}
          value={query}
          id='search_bar'
          aria-label='Search'
        />
      </form>
      <div className='fruit'>
        {filterdFruit &&
          filterdFruit.map((fruit) => (
            <div key={fruit.id}>
              <Card fruit={fruit} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
