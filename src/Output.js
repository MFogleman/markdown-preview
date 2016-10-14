/* eslint-disable*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';

class Output extends Component{
    constructor(props) {
        super(props);
        this.state = {fancyText: ""};
        this.printFancy = this.printFancy.bind(this);
        this.outputTestButton = this.outputTestButton.bind(this);
    }

    outputTestButton(a){
        console.log(this);
        this.setState({fancyText:Input.state.rawText});

    }
    printFancy(letter){
        console.log("printFacny called");
    }

    render(){
        return (
            <div className="output">
                <button onClick={this.outputTestButton}>outputTest</button>
            </div>
        )
    }
}

//export default Output;
    