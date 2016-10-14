/* eslint-disable*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var marked = require('marked');
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: false,
    smartypants: false
});

class Converter extends Component{
    constructor(props) {
        super(props);
        this.state = {rawText: ""};
        this.textInput = this.textInput.bind(this);
    }
    

    textInput(e) {  
        this.setState({rawText:e.target.value});    
    }

    render() {
        var html = marked(this.state.rawText || " ");
        return (
            <div className="converter">
                <textarea 
                    name="inputarea"
                    className="input" 
                    placeholder="Enter your raw markdown"
                    onChange={this.textInput}
                    value={this.state.rawText}
                />
                
                <div 
                    className="output"
                    dangerouslySetInnerHTML={{__html: html}}
                />                                     
            </div>
        )
    }
}
export default Converter;    