import React from 'react';
import styles from './image_form.module.scss';

export default ({ title, onClick, selected }) => (
  <button onClick={onClick} 
          className={styles.button + ` ${selected ? styles.button_selected : ''}`}>
          { title }
  </button>
);