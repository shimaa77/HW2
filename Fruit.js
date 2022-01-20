import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
const Fruit = ({ allSaved, setAllSaved }) => {
  const fruit = useLocation().state.artist;
  const save = () => {
    if (allSaved.includes(fruit) === false) {
      setAllSaved([...allSaved, fruit]);
      localStorage.Saved = JSON.stringify([...allSaved, fruit]);
      alert('Fruit saved successfully');
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <Link to='/' className='links'>
            <p className='linkText'>Go Back</p>
          </Link>
          <h2 className='text fruit__name'>
            Fruit Name: {fruit.name}
          </h2>
          <h3 className='text'> Name: {fruit.name}</h3>
          
          
         ]
          <div className='saveDiv'>
            <button className='btn' onClick={save}>
              <span>Save</span>
            </button>
          </div>
        </Col>
        <Col>
          <img
            
            src={fruit.url}
            alt = {fruit.name}
            
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Fruit;
