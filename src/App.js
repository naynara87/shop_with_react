import React, {useState} from 'react';
import { Navbar,Nav,NavDropdown,Container,Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data.js'
import Detail from './detail.js'

import { Link, Route, Switch } from "react-router-dom";


function App(){

  let [shoes, shoes변경] = useState(Data);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    <Switch>
      <Route path="/" exact>
        <div className="main-top background">
          <h1>20% Season Off</h1>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
        <div className="container">
        <div className="row">
          { 
            shoes.map((a,i)=>{
              return <Product shoes={shoes[i]} key={i}/>
            })
          }
        </div>
      </div>
      </Route>


      <Route path="/detail">
        <Detail />
      </Route>

      <Route path="/:id">
        <div className="p-5 text-center">아무거나적었을때 이거보여주세요.</div>
      </Route>
    
    </Switch>

    </div>
  )
}

function Product(props){
  return (
    <div className="col-md-4 text-center">
      <img src={props.shoes.imgsrc} width="100%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content }</p>
      <p>{ props.shoes.price } 원</p>
    </div>
  )
}



export default App;
