import React, {Component} from 'react';
import PropTypes from 'prop-types';
import imgStyles from './image_list.module.scss';
import Title from '../Title';


const ImageButton = ({position, onClick, children}) => (
  <button className={imgStyles.button} data-pos={position} onClick={onClick}>{children}</button>
)

const Image = ({pointer, tooltip, src}) => (
  <div className={imgStyles.image_wrapper}>
    <div className={imgStyles.image_inner} style={{backgroundImage: `url(${src})`}}>
      <ImageButton position='left'>Edit</ImageButton>
      <ImageButton position='right'>Delete</ImageButton>

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

    const { images } = this.props;
    return (
      <div className={imgStyles.container}>
        <Title text='Available images'/>
        <div className={imgStyles.list}>

          {images.map(img => <Image {...img}/>)}

          {/* <Image key={0} pointer='right' tooltip='111111111111 dfs fd dfs f dsf ds'/>
          <Image key={0} pointer='right' tooltip='11'/>
          <Image key={1} pointer='left' tooltip='22222'/>
          <Image key={2} pointer='top' tooltip='333333333333'/>
          <Image key={3} pointer='bottom' tooltip='44444'/>
          {(new Array(20)).fill(0).map((item, ind) => <Image key={ind} pointer='right' tooltip='Hello'/>)} */}
        </div>
      </div>
    );
  }
}