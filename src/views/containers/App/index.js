import React, { Component } from 'react';
import ImageForm from '../../presentational/ImageForm';
import ImageList from '../../presentational/ImageList';
import ImageView from '../../presentational/ImageView';

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
      position: 50,

      // Id of selected image to Edit
      id: '',

      // Image to View
      view: null,

      
    }
    this.state = {maxSize: MAX_SIZE, ...this.initialState};

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
    const { key:id, src:image, ...restOptions } = img;
    this.setState({id, image, restOptions});
  }

  handleSave = (e) => {
    const { maxSize, image: src, tooltip, pointer, id, size, position } = this.state;

    
    if(src === '') {
      alert('Choose image'); return;
    }

    if (tooltip === '' && pointer !== '') {
      alert('Enter tooltip'); return;
    }


    const newSize = this.totalSize + +size.toFixed(2);
    if( newSize > maxSize) {
      alert(`Image too large: ${newSize} > ${maxSize}Mb`); return;
    }


    if(id === '') {
      this.boundActionCreators.insertImage({
        src, tooltip, pointer, size, position
      });
      this.setState({...this.initialState});
    }
    else {
      this.boundActionCreators.editImage({
        id, src, tooltip, pointer, size, position
      });
      this.setState({...this.initialState});
    }

  }

  handleViewImage = (img) => {
    if(!img) {
      this.setState({view: null});
      return;
    }
    const { key:id, src:image, ...restOptions } = img;
    this.setState({view: {id, image, ...restOptions}});
  }

  render() {
    const { images } = this.props;
    const { deleteImage } = this.boundActionCreators;
    const { id, view, ...restState } = this.state;
    
    return (
      <div className="App">
        <ImageForm  {...restState} totalSize={this.totalSize}
                    handleImage={this.handleImageChange} 
                    handleInput={this.handleStateChange} 
                    handleSave={this.handleSave}/>
        <ImageList  images={images} deleteImage={deleteImage} 
                    handleView={this.handleViewImage}
                    handleSelect={this.handleSelectImage}  />
        {view && <ImageView {...view} onClose={() => this.handleViewImage(null)}/>}
      </div>
    );
  }
}

const mapStateToProps = ({images}) => ({images: mapImageObjectToArray(images)});

export default connect(mapStateToProps, null)(App);
