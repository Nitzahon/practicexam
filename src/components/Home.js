import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  //rconst
  constructor(props) {
    super(props)
  
    this.state = {

       
    }
  }
  


  addName=(e)=>
  {
    if(e.target.value!=='')
    {
      this.setState({name:e.target.value});
    }

  }
  createGame=()=>
  {
    this.props.createGame(this.state.name);
  }
  render() {
    return (
      <div>
        <br/><br/><br/>
        <h1>Ready for War</h1>
        <br/><br/><br/>
        <input onChange={this.addName} placeholder="Enter Your Name"></input>
         <br/><br/><br/> 
         <Link to='/game' ><button onClick={this.createGame} value="p-3 mb-2 bg-info text-white">Start</button></Link>
      </div>
    )
  }
}