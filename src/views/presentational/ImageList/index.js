import React, {Component} from 'react';
import PropTypes from 'prop-types';
import imgStyles from './image_list.module.scss';
import Title from '../Title';


const ImageButton = ({position, onClick, children}) => (
  <button className={imgStyles.button} data-pos={position} onClick={onClick}>{children}</button>
)

const Image = ({pointer, tooltip, src, onDeleteImage, onEditImage}) => (
  <div className={imgStyles.image_wrapper}>
    <div className={imgStyles.image_inner} style={{backgroundImage: `url(${src})`}}>
      <ImageButton position='left' onClick={onEditImage}>Edit</ImageButton>
      <ImageButton position='right' onClick={onDeleteImage}>Delete</ImageButton>
      {
        tooltip && pointer && <div className={imgStyles.image_tooltip + ' ' + imgStyles[`tooltip_${pointer}`]}>
          {tooltip}
        </div>
      }
    </div>
  </div>
);

Image.propTypes = {
  pointer: PropTypes.string,
  tooltip: PropTypes.string,
};

export default class App extends Component {


  componentDidMount(){
    console.log(this.props);
  }

  render() {

    const { images, deleteImage, handleSelect } = this.props;
    return (
      <div className={imgStyles.container}>
        <Title text='Available images'/>
        <div className={imgStyles.list}>

          { images.map(img => 
              <Image {...img} 
                onDeleteImage={() => deleteImage(img.key)}
                onEditImage={() => handleSelect(img)}/>)
          }
        </div>
      </div>
    );
  }
}