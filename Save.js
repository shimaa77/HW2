import React from 'react';
import Card from '../Components/Card';

const Saved = ({ allSaved }) => {
  return (
    <div style={{ alignText: 'center' }}>
      <div className='fruit'>
        {allSaved.map((fruit) => (
          <div key={fruit.id}>
            <Card fruit={fruit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
