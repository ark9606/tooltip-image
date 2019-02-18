import React, { Component } from 'react';
import ImageForm from '../../presentational/ImageForm';
import ImageList from '../../presentational/ImageList';
// import ImageList from '../SavedImageList';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertImage, editImage, deleteImage, mapImageObjectToArray, MAX_SIZE } from '../../../state/duck/images';

import './App.scss';


class App extends Component {

  constructor(props){
    super(props);

    this.initialState = {
      pointer: '',
      tooltip: '',
      image: '',
      size: '',

      // Id of selected image to Edit
      id: '',
    }
    this.state = {...this.initialState};

    this.boundActionCreators = bindActionCreators({
      insertImage, editImage, deleteImage
    }, props.dispatch);

  }

  get totalSize() {
    return +this.props.images.reduce((sum, current) => sum + current.size, 0).toFixed(2);
  }


  handleStateChange = (param, value) => {
    
    this.setState(prevState => {
      let { pointer } = prevState;
      if(param === 'tooltip' && pointer === '') {
        pointer = 'top';
        return {[param]: value, pointer}
      }
      return {[param]: value}
    });
  }

  handleImageChange = (params) => {    
    this.setState({image: params.src, size: params.size});
  }

  handleSelectImage = (img) => {
    const { key:id, src:image, tooltip, pointer } = img;
    this.setState({
      id, 
      pointer,
      tooltip,
      image,
    });

  }

  handleSave = (e) => {
    const { image: src, tooltip, pointer, id, size } = this.state;
    if(src === '') {
      alert('Choose image'); return;
    }

    if (tooltip === '' && pointer !== '') {
      alert('Enter tooltip'); return;
    }

    const newSize = this.totalSize + +size.toFixed(2);
    if( newSize > MAX_SIZE) {
      alert(`Image too large: ${newSize} > ${MAX_SIZE}Mb`); return;
    }

    if(id === '') {
      this.boundActionCreators.insertImage({
        src, tooltip, pointer, size
      });
      this.setState({...this.initialState});
    }
    else {
      this.boundActionCreators.editImage({
        id, src, tooltip, pointer, size
      });
      this.setState({...this.initialState});
    }

  }

  render() {
    const { images } = this.props;
    const { deleteImage } = this.boundActionCreators;
    const { id, ...restState } = this.state;
    
    return (
      <div className="App">
        <ImageForm  {...restState} totalSize={this.totalSize}
                    handleImage={this.handleImageChange} 
                    handleInput={this.handleStateChange} 
                    handleSave={this.handleSave}/>
        <ImageList  images={images} deleteImage={deleteImage} handleSelect={this.handleSelectImage}  />
      </div>
    );
  }
}

// alert(1024 * 1024 * 5 - unescape(encodeURIComponent(JSON.stringify(localStorage))).length);
// var _lsTotal=0,_xLen,_x;for(_x in localStorage){ if(!localStorage.hasOwnProperty(_x)){continue;} _xLen= ((localStorage[_x].length + _x.length)* 2);_lsTotal+=_xLen; console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB")};console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");

const mapStateToProps = ({images}) => ({images: mapImageObjectToArray(images)});

export default connect(mapStateToProps, null)(App);
