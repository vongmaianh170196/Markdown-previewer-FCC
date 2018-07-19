import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

class App extends Component {
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
  render() {  

//const text = this.state.input;
return (
      <div className="App">
      <textarea onChange={this.handleChanged} rows="10" cols="50"></textarea>
        <ReactMarkdown source={this.state.input}/>
      </div>
    );
  }
}

export default App;
