import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css';


const ArticleImage = ({ url }) => (
      <div className={styles.image}>
        <img className={styles.image} src={url} alt="alt text"/>
      </div>
);

ArticleImage.PropTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default ArticleImage;
