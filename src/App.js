import React, { Component } from 'react';
import ImageForm from './views/presentational/ImageForm';
import ImageList from './views/presentational/ImageList';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageForm/>
        <ImageList/>
      </div>
    );
  }
}

export default App;
