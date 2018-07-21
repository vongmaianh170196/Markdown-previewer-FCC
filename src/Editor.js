import React, { Component } from 'react';
import './App.css';
import { Preview } from './Previewer.js'

export class Editor extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        input: '',
        previewtext:''
      }
      this.handleChanged = this.handleChanged.bind(this);
    }
    handleChanged(event){
      this.setState({
        input: event.target.value
      });
    }
    render(){
      return(
        <div className="container">
        <div className="editor">
          <div className="heading">
            <h2>EDITOR</h2>
          </div>
          <div className="content">
            <textarea  placeholder="Enter your code here..." id="editor" onChange={this.handleChanged} rows="100" cols="50"></textarea>
          </div>
        </div>
        <div className="preview">
        <Preview editor={this.state.input}/>
        </div>
        </div>
      );
    }
  }