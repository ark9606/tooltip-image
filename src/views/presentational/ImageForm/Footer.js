import React, {Component} from 'react';
import styles from './image_form.module.scss';
import Button from './Button';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }



  render() {
    return (
      <footer className={styles.footer}>
        <input type="text" name="toolrip" placeholder='Tooltip text'/>
        <Button title='Save'/>
      </footer>
    );
  }
}