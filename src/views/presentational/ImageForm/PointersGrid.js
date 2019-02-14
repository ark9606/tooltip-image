import React, {Component} from 'react';
import styles from './image_form.module.scss';
import Button from './Button';

export default class PointersGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointer: ''
    };

  }



  render() {
    
    return (
      <div className={styles.pointers}>
        <Button title='Top'/>
        <Button title='Right'/>
        <Button title='Bottom'/>
        <Button title='Left'/>
      </div>
    );
  }
}