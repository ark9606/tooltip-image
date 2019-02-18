import React from 'react';
import PropTypes from 'prop-types';
import imgStyles from './image_list.module.scss';

const ImageButton = ({position, onClick, children}) => (
  <button className={imgStyles.button} 
          data-pos={position} onClick={onClick}>{children}</button>
)

const ImageItem = ({src, onDeleteImage, onEditImage, onViewImage}) => (
  <div className={imgStyles.image_wrapper}>
    <div className={imgStyles.image_inner} style={{backgroundImage: `url(${src})`}}/>
    <ImageButton position='left' onClick={onEditImage}>Edit</ImageButton>
    <ImageButton position='right' onClick={onDeleteImage}>Delete</ImageButton>
    <ImageButton position='center' onClick={onViewImage}>View</ImageButton>
  </div>
);

ImageItem.propTypes = {
  pointer: PropTypes.string,
  tooltip: PropTypes.string,
};


export default ImageItem;
