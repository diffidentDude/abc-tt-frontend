import React from 'react';
import { Contributor, NodeDef, Source } from '../../data/data';
import { ArticleMetaData } from '../ArticleMetaData/ArticleMetaData';
import { Content } from '../Content/Content';
import { Dates } from '../Dates/Dates';
import { Embed } from '../Embed/Embed';
import styles from './Article.module.css';
interface Props {
  title: string;
  contributors?: Array<Contributor>;
  dates?: {
    displayPublished: string;
    displayUpdated?: string;
  };
  text: NodeDef;
  embeddedMedia: Array<EmbedItem>;
  source?: Source;
  mediaFeatured: Array<EmbedItem>;
};

interface EmbedItem {
  docType: string;
}

const Article = ({ title, contributors, dates, text, embeddedMedia, source, mediaFeatured }: Props): JSX.Element => {

  return <article className={styles.article}>
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <ArticleMetaData contributors={contributors} dates={dates} source={source} />
      </div>
      <div className={styles.feature}>
        {mediaFeatured && mediaFeatured.map((feature) => {
          return <Embed embed={feature} />
        })}
      </div>
      <div className={styles.content}>
        <Content contents={text} embeddedMedia={embeddedMedia} />
        <Dates dates={dates} short={true} />
      </div>
    </div>
    <div className={styles.sidebar}>
      <h2>More Stories</h2>
      <div className={styles.moreStories} />
    </div>
  </article>
};

export default Article;
