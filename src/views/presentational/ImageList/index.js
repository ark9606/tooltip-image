import React, {Component} from 'react';
import imgStyles from './image_list.module.scss';
import Title from '../Title';

const Image = ({}) => (
  <div className={imgStyles.image_wrapper}>
    <div className={imgStyles.image_inner}></div>
  </div>
);

export default class App extends Component {


  render() {
    return (
    <div className={imgStyles.container}>
      <Title text='Available images'/>
      <div className={imgStyles.list}>

        {(new Array(20)).fill(0).map((item, ind) => <Image key={ind}/>)}
      </div>
    </div>
    );
  }
}