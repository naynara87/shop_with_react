import React, {useContext, useState} from 'react';
import { Navbar,Nav,NavDropdown,Container,Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data.js';
import Detail from './Detail.js';
import Cart from './Cart.js';
import axios from 'axios';

import { Link, Route, Switch } from "react-router-dom";

export let 재고context = React.createContext();//범위를 생성


function App(){

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12,30,23,12]);
  let [cart, cart변경] = useState([{id:0,name:1},{id:1,name:2}]);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link}>Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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
        <div className="container text-center">
          
        <재고context.Provider value={재고}>

          <div className="row product-wrap">
            { 
              shoes.map((a,i)=>{
                return <Product shoes={shoes[i]} key={i} i={i}/>
              })
            }
          </div>

          </재고context.Provider>

        <button className="btn btn-primary" onClick={ ()=>{
          //로딩중ui 띄우기
          var productWrap = document.querySelector('.product-wrap')
          productWrap.htmlContent =`<div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>`
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{ 
            //로딩중ui 없애기
            console.log(result.data);
            shoes변경([...shoes, ...result.data]);
          })
          .catch(()=>{ 
            //로딩중ui 없애기
            console.log('load fail');
          })
        } }>상품 더보기</button>
      </div>
      </Route>

      <Route path="/detail/:id">

        <재고context.Provider value={재고}>
            <Detail shoes="{shoes}" 재고={재고} 재고변경={재고변경}/>
        </재고context.Provider>

      </Route>


      <Route path="/cart">

        <Cart></Cart>

      </Route>

      <Route path="/:id">
        <div className="p-5 text-center">아무거나적었을때 이거보여주세요.</div>
      </Route>
    
    </Switch>

    </div>
  )
}

function Product(props){

  let 재고 = useContext(재고context);

  return (
    <div className="col-md-4 text-center">
      <img src={ 'http://codingapple1.github.io/shop/shoes' + (props.i + 1) +'.jpg' } width="100%" alt="" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content }</p>
      <p>{ props.shoes.price } 원</p>
      <Test></Test>
    </div>
  )
}

function Test(){
  let 재고 = useContext(재고context);
  return <p>재고: {재고[0]}</p>
}


export default App;
