import React, { Component } from 'react';
import ImageForm from './views/presentational/ImageForm';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageForm/>
      </div>
    );
  }
}

export default App;
