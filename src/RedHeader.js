import React from 'react';
import PropTypes from 'prop-types';
import styles from './RedHeaderFooter.module.css';

const RedHeader = () => (
  <div className={styles.redHeader}>
    <h2 className={styles.headerTitle}>The INFO6150 News</h2>
    <div className={styles.headerTime}><time dateTime="2019">Wed, February 20, 2019</time></div>
  </div>
);

RedHeader.propTypes = {
};

export default RedHeader;
