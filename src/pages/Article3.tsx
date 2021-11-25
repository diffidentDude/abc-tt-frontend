import React from 'react';
import Article from '../components/Article/Article';
import data from '../data/article3.json';

const Article3 = () => (
  <Article title={data.title}>
    {JSON.stringify(data.text)}
  </Article>
);

export default Article3;
