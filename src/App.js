import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
//npm install react-bootstrap bootstrap
//start bootstrap
import './App.css';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
//npm install react-router-dom
import Game from './components/Game.js';
import End from './components/End.js';
import Home from './components/Home.js';


export default class App extends Component {
  state={
    playerC:{},
    playerU:{},

  }
  createGame=(name)=>{
    let cards=[]
    for(let i=1;i<=13;i++){for(let j=1;j<=4;j++){cards=[...cards,i];}}
    for (let i in cards) 
    {
      const randomIndex = 52 - Math.floor(Math.random() * (52 - i));
      [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
    }
    let computer= cards.slice(0, 26);
    let user= cards.slice(26, 52);
    this.setState({playerC:
      {playerType:"computer",
        playerName:"computer",
        playerWins:0,
        playerScore:0,
        playerCard:0,
        cards:[...computer]}});
    this.setState({playerU:
          {playerType:"user",
            playerName:name,
            playerWins:0,
            playerScore:0,
            playerCard:0,
            cards:[...user]}});  
  }
  
  next=withRouter(({ history }) =>{
    history.push('/End');
  });
  //cards devition
  scoreCheck=()=>
  {
    
    let playerC=this.state.playerC;
    let playerU=this.state.playerU;
    playerC.playerCard++;
    playerU.playerCard++;
    let cardC=playerC.cards[playerC.playerCard];
    let cardU=playerU.cards[playerU.playerCard];
    if(cardC>cardU){
      playerC.playerScore++;
    }
     else if(cardC<cardU){
      playerU.playerScore++;
    }
    this.setState({playerC:playerC});
    this.setState({playerU:playerU});

    if(playerC.playerCard===26)
    {
      if(playerC.playerScore>playerU.playerScore){playerC.playerWins++}
      else if(playerC.playerScore<playerU.playerScore){playerU.playerWins++}
      this.setState({playerC:playerC});
      this.setState({playerU:playerU});
      this.next();
      

    }
  
  }

  render() {
    return (

      <div className="App">


      <Router> 
        <Switch>
        <Route exact path='/' component={()=>{return <Home createGame={this.createGame}/>}}/>
          <Route exact path='/game' component={()=>{return <Game scoreCheck={this.scoreCheck} playerC={this.state.playerC} playerU={this.state.playerU} />}}/>
          <Route exact path='/end' component={()=>{return <End/>}}/>
        </Switch>
      </Router>  
      </div>
    )
  }
}