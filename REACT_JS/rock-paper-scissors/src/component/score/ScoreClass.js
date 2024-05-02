import React, { Component } from 'react';

class ScoreClass extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount ByeBye")
    }

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