import React from 'react';
import PropTypes from 'prop-types';
import styles from './RedHeaderFooter.module.css';

const RedFooter = () => (
  <div className={styles.redFooter}>
    <div className={styles.footerText}>©2019，April Bingham</div>
  </div>
);

RedFooter.propTypes = {
};

export default RedFooter;
