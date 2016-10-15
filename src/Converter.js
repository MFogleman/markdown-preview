/* eslint-disable*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var marked = require('marked');
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: false,
    smartypants: false
});

class Converter extends Component{
    constructor(props) {
        super(props);
        this.state = {rawText: ""};
        this.state = {fancyText: ""};
        this.textInput = this.textInput.bind(this);
        this.markdownText = this.markdownText.bind(this);
    }
    textInput(e) {  
        this.setState({rawText:e.target.value});            
    }
    markdownText(){
        if (this.state.rawText){
            var rawMarkdown = marked(this.state.rawText, {sanitize:true} || "");
            return {__html: rawMarkdown}
        }
        return {__html:""}
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
                />
                
                <div
                    className="output"
                    dangerouslySetInnerHTML={this.markdownText()}
                >
                
                </div>                                     
            </div>
        )
    }
}
export default Converter;    