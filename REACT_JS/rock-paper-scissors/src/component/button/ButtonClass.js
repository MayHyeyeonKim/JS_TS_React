import React, { Component } from 'react';

export default class ButtonClass extends Component {
    render() {
        const { onClick, choice } = this.props;
        return (
            <button className="button" onClick={() => onClick(choice)}>
                {choice}
            </button>
        );
    }
}
