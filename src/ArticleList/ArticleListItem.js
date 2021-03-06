import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';
import ArticleImage from './ArticleImage.js'

class ArticleListItem  extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <li className={styles.list_item}>
        <div className={styles.image}>
          <ArticleImage url={this.props.url} />
        </div>
        <div className={styles.titleAndText}>
          <h3 id={styles.title}>{this.props.title}</h3>
          <p id={styles.shortText}>{this.props.shortText}</p>
        </div>
        <div className={styles.authorAndDate}>
          <a id={styles.author} rel={this.props.author} href=" "> By: {this.props.author}</a> <br/>
          <date id={styles.date}><b>{this.props.date}</b></date>
        </div>
      </li>
    );
  }

}

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleListItem;
