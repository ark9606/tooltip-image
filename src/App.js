import React, { Component } from 'react';
import ImageForm from './views/containers/ImageForm';
// import ImageList from './views/presentational/ImageList';
import ImageList from './views/containers/SavedImageList';

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
