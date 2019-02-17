import React, {Component, PureComponent} from 'react';
// import PropTypes from 'prop-types';

import styles from './image_form.module.scss';
import Title from '../Title';
import ImageInput from './ImageInput';
import FormFooter from './FormFooter';
import PointersGrid from './PointersGrid';

import { MAX_SIZE } from '../../../state/duck/images';


const FormTitle = () => <Title text='Save image'/>;


class ImageForm extends PureComponent {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {

    const { tooltip, pointer, image, totalSize, handleInput, handleSave, handleImage} = this.props;

    return (
      <form className={styles.image_form} onSubmit={this.handleSubmit}>
        <FormTitle />
        <p>Memory usage: {totalSize} / {MAX_SIZE}Mb (LocalStorage limit)</p>
        <div>
          <ImageInput handleInput={handleImage} image={image}/>
          <PointersGrid pointer={pointer} handlePointerChange={handleInput}/>       
          <FormFooter tooltip={tooltip} 
                      handleInput={handleInput}
                      handleSave={handleSave}/> 
        </div>

      </form>
    );
  }
}


ImageForm.propTypes = {

};

// export default connect()(ImageForm);
export default ImageForm;