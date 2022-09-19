import React from 'react';
import Article from '../components/Article/Article';
import data from '../data/article2.json';

const Article2 = () => (
  <Article 
    title={data.title} 
    text={data.text.json} 
    embeddedMedia={data._embedded.mediaEmbedded} 
    dates={data.dates} 
    contributors={data._embedded.contributors} 
    source={{ sourceName: data.source, sourceURL: data.sourceURL }}
    mediaFeatured={ data._embedded.mediaFeatured } />
);

export default Article2;
