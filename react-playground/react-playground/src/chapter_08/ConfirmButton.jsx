import React, { Component } from 'react';

class componentName extends Component {
    constructor(props){
        super(props);

        this.state={
            isConfirmed: false,
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm(){
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    render(){
        return (
            <button 
                onClick={this.handleConfirm}
                // disabled={this.state.isConfirmed} //true이면 비활성화
            >
                {this.state.isConfirmed ? "checked" : "check"}
            </button>
        );
    }
}



export default componentName;