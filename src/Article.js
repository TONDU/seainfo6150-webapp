import React from 'react';
import PropTypes from 'prop-types';

const Article = ({title,author,date,Children}) => (
  <div> {title} {author} {date} {Children} </div>
);

Article.propTypes = {
};

export default Article;
