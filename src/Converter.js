import React, { Component } from 'react';
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
        this.textInput = this.textInput.bind(this);
        this.markdownText = this.markdownText.bind(this);
    }
    
    textInput(e) {  
        this.setState({rawText:e.target.value});            
    }
    
    markdownText() {
        if (this.state.rawText){
            var rawMarkdown = marked(this.state.rawText, {sanitize:true} || "");
            return {__html: rawMarkdown}
        }
        return {__html:"<br>and see your compiled Markdown here!"}
    }

    render() {
        return (
            <div className="converter">
                
                <div className="header">
                    <h1>Markdown Preview</h1>
                </div>
                
                <textarea 
                    name="inputarea"
                    className="input" 
                    placeholder="Enter your raw Markdown here..."
                    onChange={this.textInput}
                />
                
                <div
                    className="output"
                    dangerouslySetInnerHTML={this.markdownText()}
                />
                                                     
            </div>
        )
    }
}

export default Converter;    