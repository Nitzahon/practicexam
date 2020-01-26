import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <br/><br/><br/>
        <h1>Ready for War</h1>
        <br/><br/><br/>
        <input onChange={this.addName} placeholder="Enter Your Name"></input>
         <br/><br/><br/> 
         <button value="p-3 mb-2 bg-info text-white">Light Blue</button>
      </div>
    )
  }
}