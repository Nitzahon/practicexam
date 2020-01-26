import React, { Component } from 'react'

export default class Game extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cardC:this.props.playerC.cards[this.props.playerC.playerCard],
            cardU:this.props.playerU.cards[this.props.playerU.playerCard]

             
        }
    }
    scoreCheck=()=>{
        this.props.scoreCheck();
    }
    
    render() {
        return (
            <div>
                <h1>COMPUTER</h1>
                <p>{this.state.cardC}</p>
                <p>{this.state.cardU}</p>
                <h1>YOU</h1>
                <button onClick={this.scoreCheck} value="p-3 mb-2 bg-info text-white">NEXT</button>

                
            </div>
        )
    }
}
