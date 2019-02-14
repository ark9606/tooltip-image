import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import styles from './image_form.module.scss';
import Title from '../Title';
import ImageInput from './ImageInput';
import Footer from './Footer';
import PointersGrid from './PointersGrid';


const FormTitle = () => <Title text='Save image'/>;


export default class ImageForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <form className={styles.image_form} onSubmit={this.handleSubmit}>
        <FormTitle />
        <ImageInput />
        <PointersGrid/>       
        <Footer /> 
      </form>
    );
  }
}


ImageForm.propTypes = {

};