import React from 'react';
import styles from './image_form.module.scss';

export default ({ title, onClick }) => (
  <button className={styles.button} onClick={onClick}>{title}</button>
);