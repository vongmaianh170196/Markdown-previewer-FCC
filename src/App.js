import React, { Component } from 'react';

import './App.css';
import { Editor } from './Editor.js'

class App extends Component {
  
  render() {  

//const text = this.state.input;
return (
      <div className="App">
        <Editor />
        <p style={{textAlign: 'center', color:'white'}}>  Emma Vo. 2018 </p>
      </div>
    );
  }
};




export default App;
