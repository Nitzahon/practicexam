import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
//npm install react-bootstrap bootstrap
//start bootstrap
import './App.css';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom';
//npm install react-router-dom
import Game from './components/Game.js';
import End from './components/End.js';
import Home from './components/Home.js';


export default class App extends Component {
  state={
    players:[],
    move:false

  }
  //cards devition
  divideCards=(name)=>
  {
    let cards=[]
    for(let i=1;i<=13;i++){for(let j=1;j<=4;j++){cards=[...cards,i];}}
    for (let i in cards) 
    {
      const randomIndex = 52 - Math.floor(Math.random() * (52 - i));
      [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
    }
    let computer= cards.slice(0, 27);
    let user= cards.slice(0, 27);
    this.setState({players:[...this.state.players,
      {playerType:computer,
        playerName:computer,
        playerWins:0,
        playerScore:0,
        playerCard:0,
        cards:[...computer]}]});
    this.setState({players:[...this.state.players,
          {playerType:user,
            playerName:name,
            playerWins:0,
            playerScore:0,
            playerCard:0,
            cards:[...user]}]});  
  }





   



 

  render() {
    return (

      <div className="App">

      <Router> 
        <Switch>
        <Route exact path='/' component={()=>{return <Home/>}}/>
          <Route exact path='/Game' component={()=>{return <Game />}}/>
          <Route exact path='/End' component={()=>{return <End/>}}/>
        </Switch>
      </Router>  
      </div>
    )
  }
}