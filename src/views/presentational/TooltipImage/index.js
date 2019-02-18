import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import styles from './tooltip_image.module.scss';


const ImageButton = ({position, onClick, children}) => (
  <button className={styles.button} 
          data-pos={position} onClick={onClick}>{children}</button>
)


export default class TooltipImage extends PureComponent {

  render() {
    const {pointer, tooltip, image, onClose}= this.props;
    // console.log(this.props);
    
    return(
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <img src={image} alt={tooltip}/>
          <ImageButton position='right' onClick={onClose}>Close</ImageButton>
          {
            tooltip && pointer && <div className={styles.image_tooltip + ' ' + styles[`tooltip_${pointer}`]}>
              {tooltip}
            </div>
          }
        </div>
      </div>
    );
  }
}



TooltipImage.propTypes = {
  pointer: PropTypes.string,
  tooltip: PropTypes.string,
};

