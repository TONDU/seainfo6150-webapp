import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import RedHeader from '../RedHeader';
import RedFooter from '../RedFooter';
import styles from './ArticleList(Assignment8).module.css';

const ArticleList = ({ articles }) => (
      <div className={styles.background}>
        <RedHeader />
        <div className={styles.main}>
          <ul className={styles.ul_style}>
          {
              Object.values(articles).map(article => {
                return (
                  <ArticleListItem
                  key={article.slug}
                  title={article.title}
                  date={article.pubDate}
                  year={article.pubYear}
                  author={article.author}
                  shortText={article.shortText}
                  url={article.image._url}
                />
              );
            })
          }
          </ul>
        </div>
        <RedFooter />
      </div>
      // this iterates through the articles JSON and
      // calls your ArticleListItem component for each article
);


ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
}

export default ArticleList;
