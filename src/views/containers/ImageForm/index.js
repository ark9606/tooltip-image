import React, {Component, PureComponent} from 'react';
// import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertImage } from '../../../state/duck/images';

import styles from './image_form.module.scss';
import Title from '../../presentational/Title';
import ImageInput from './ImageInput';
import FormFooter from './FormFooter';
import PointersGrid from './PointersGrid';


const FormTitle = () => <Title text='Save image'/>;


class ImageForm extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      pointer: '',
      tooltip: '',
      image: ''
    };

    this.boundActionCreators = bindActionCreators({
      insertImage
    }, props.dispatch);
  }


  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleInput = (param, value) => {
    this.setState({[param]: value});
  }

  handleSave = (e) => {
    // this.setState({tooltip: e.target.value});

    const { image: src, tooltip, pointer } = this.state;
    if(src === '') {
      alert('Choose image');
      return;
    }
    this.boundActionCreators.insertImage({
      src, tooltip, pointer 
    });
    // alert('Save');
  }

  render() {

    const {tooltip, pointer, image} = this.state;

    return (
      <form className={styles.image_form} onSubmit={this.handleSubmit}>
        <FormTitle />
        <ImageInput handleInput={this.handleInput} image={image}/>
        <PointersGrid pointer={pointer} handlePointerChange={this.handleInput}/>       
        <FormFooter tooltip={tooltip} 
                    handleInput={this.handleInput}
                    handleSave={this.handleSave}/> 
      </form>
    );
  }
}


ImageForm.propTypes = {

};

export default connect()(ImageForm);