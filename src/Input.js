/* eslint-disable*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Converter extends Component{
    constructor(props) {
        super(props);
        this.state = {rawText: ""};
        this.textInput = this.textInput.bind(this);
        this.testButton = this.testButton.bind(this);
    }
    textInput(e) {  
        this.setState({rawText:e.target.value});
        console.log("text was input");
        
    }
    testButton(e){
        console.log(this);
    }
    render() {
        return (
            <div className="input">
                <textarea 
                    name="inputarea" 
                    placeholder="Enter your raw markdown"
                    onChange={this.textInput}
                    value={this.state.rawText}
                >
                </textarea>
                <button onClick={this.testButton}>Test</button>
            </div>
        )
    }
}


class Output extends Input{
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


export default Input;
    