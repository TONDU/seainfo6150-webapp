import React from 'react';
import PropTypes from 'prop-types';

const Article = ({title,author,date,children}) => (
  <div> {title} {author} {date} {children} </div>
);

Article.propTypes = {
};

export default Article;
