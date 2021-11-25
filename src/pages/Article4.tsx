import React from 'react';
import Article from '../components/Article/Article';
import data from '../data/article4.json';

const Article4 = () => (
  <Article title={data.title}>
    {JSON.stringify(data.text)}
  </Article>
);

export default Article4;
