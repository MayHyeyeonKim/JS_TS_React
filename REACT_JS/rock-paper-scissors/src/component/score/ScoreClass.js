import React, { Component } from 'react';

class ScoreClass extends Component {
    render() {
        return (
            <div className='score'>
            <p>{this.props.label}</p>
            <p>{this.props.score}</p>
        </div>
        );
    }
}

export default ScoreClass;