import React, { Component } from 'react';
import ArticleList from './ArticleList/ArticleList';
import articles from './data/articles.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
