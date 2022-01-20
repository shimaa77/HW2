import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Card, CardBody, CardGroup,  Container, Input, InputGroup, InputGroupAddon, InputGroupText,  NavLink  } from 'reactstrap';
import { Link } from 'react-router-dom';
import Login from './Login';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function App() {
// const navigate = useNavigate();
  return (

	<div style={{ display: 'block', width: 1000, padding:70,}}>
       {/* <Link style = {{color : 'black'}}to = "/Login">login</Link> */}

	<Row>
		<Col style={{
     
		}}>
		 <img style = {{width:400}}src='https://scontent.fgza4-1.fna.fbcdn.net/v/t1.15752-9/271901774_730019871295187_2102164075333868363_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=pn7duiKUJ3MAX93UMLz&_nc_ht=scontent.fgza4-1.fna&oh=03_AVJv5_9fi-K8GUyJ0EvizsV4T85IPQSUX9nvf5gzi13dOw&oe=62110ADF' />
	</Col>
		<Col style={{
      // padding:50,
      
		}}>
	  <h2 style = {{fontSize:40,
    padding:50,
      color:'#46301c',
      fontFamily:'sans-serif',
      fontWeight:'bold',}}>BABOAT FOOD</h2>
    <h6 style = {{fontSize:25,
    
      color:'#46301c',
      }}>Are you looking for fresh, Organic and Grown with Palestinian hands fruits? You are in the right website!
BABOAT food is an online website created by a small group of Palestinian youths which make you able to order your fruits online.</h6>
{/* onClick={event =>  window.location.href='/Login'} */}
{/* <Button onClick={()=> navigate.push("/Login")}>Click me!</Button> */}

<button onClick={<Link to='/' className='links'>
                Login
              </Link>} className='btnPrimary'>
        <span>log in</span>
      </button>
	</Col>

	</Row>
	</div>
);
}
