/* eslint-disable*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Converter extends Component{
    constructor(props) {
        super(props);
        this.state = {rawText: "", fancyText: ""};
        this.textInput = this.textInput.bind(this);
        this.testButton = this.testButton.bind(this);
        this.printFancy = this.printFancy.bind(this);        
    }
    printFancy(){
        console.log("state", this.state);
    }

    textInput(e) {  
        this.setState({rawText:e.target.value});
        this.setState({fancyText:e.target.value});
        console.log("text was input", e.target.value);        
    }
    testButton(){
        console.log("testbutton Pressed:", this);
        console.log("testStates: ", this.state.rawText, this.state.fancyText);
    }
    render() {
        return (
            <div className="converter">
                <textarea 
                    name="inputarea"
                    className="input" 
                    placeholder="Enter your raw markdown"
                    onChange={this.textInput}
                    value={this.state.rawText}
                >
                </textarea>
                <div 
                    className="output"
                >{this.state.fancyText}
                </div>    
            </div>
        )
    }
}


class Output extends Component{
    constructor(props) {
        super(props);
        this.state = {fancyText: ""};
        this.printFancy = this.printFancy.bind(this);
        this.outputTestButton = this.outputTestButton.bind(this);
    }

    outputTestButton(a){
        console.log(this);
        this.setState({fancyText:Converter.state.rawText});

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


export default Converter;
    