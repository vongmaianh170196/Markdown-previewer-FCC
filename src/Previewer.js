import React from 'react';
import './App.css';

import ReactMarkdown from 'react-markdown';

export class Preview extends React.Component{
    constructor(props) {
      super(props);
    }
    render(){
      return(
        <div className="previewer" id="preview">
          <div className="heading">
            <h2>PREVIEW</h2>
          </div>
          <div className="content">
          <ReactMarkdown source={this.props.editor}/>
          </div>
        </div>
      );
    }
  };

