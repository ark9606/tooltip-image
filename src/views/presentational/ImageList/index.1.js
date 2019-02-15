import React, {Component} from 'react';
import PropTypes from 'prop-types';
import imgStyles from './image_list.module.scss';
import Title from '../Title';


const ImageButton = ({position, onClick, children}) => (
  <button className={imgStyles.button} data-pos={position} onClick={onClick}>{children}</button>
)

const Image = ({pointer, tooltip}) => (
  <div className={imgStyles.image_wrapper}>
    <div className={imgStyles.image_inner}>
      <ImageButton position='left'>Edit</ImageButton>
      <ImageButton position='right'>Delete</ImageButton>

      <div className={`${imgStyles.image_tooltip_container} ${imgStyles[`tooltip_${pointer}`]}`}>
        <div className={imgStyles.image_tooltip}>
          {tooltip}
        </div>
      </div>

    </div>
  </div>
);

Image.propTypes = {
  pointer: PropTypes.string,
  tooltip: PropTypes.string,
};

export default class App extends Component {


  render() {
    return (
    <div className={imgStyles.container}>
      <Title text='Available images'/>
      <div className={imgStyles.list}>

        <Image key={0} pointer='right' tooltip='111111111111'/>
        <Image key={0} pointer='right' tooltip='11'/>
        <Image key={1} pointer='left' tooltip='22222'/>
        <Image key={2} pointer='top' tooltip='333333333333'/>
        <Image key={3} pointer='bottom' tooltip='44444'/>
        {(new Array(20)).fill(0).map((item, ind) => <Image key={ind} pointer='right' tooltip='Hello'/>)}
      </div>
    </div>
    );
  }
}