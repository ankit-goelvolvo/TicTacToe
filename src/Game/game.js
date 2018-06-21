import React, { Component } from 'react';
import './game.css';
import Board from '../Board/board';

class Game extends Component {
    

    render() {
      return (
        <div className="game">
          <div className="game-board">
            {/* {this.props.firstName} */}
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game;