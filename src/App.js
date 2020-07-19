//import React from 'react';
import React, { Component } from 'react';
//import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import {Detail} from './components/DishDetail';
import { DISHES } from './shared/dishes';
//import { Form } from 'reactstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish: null
    };
  }
 render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
       <div className="container">
       <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
       </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
  );
}

}
export default App;
