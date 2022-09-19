import { Contributor, Source } from '../../data/data';
import { Dates } from '../Dates/Dates';
import styles from './ArticleMetaData.module.css';

interface ArticleMetaDataProps {
    contributors?: Array<Contributor>;
    dates?: {
        displayPublished: string;
        displayUpdated?: string;
    };
    source?: Source;
}

export const ArticleMetaData = ({ contributors, dates, source }: ArticleMetaDataProps) => {
    return <div className={styles.metaData}>
        <div>
            {source && <span className={styles.source}><a href={source.sourceURL}>{source.sourceName}</a></span>}
            {contributors && contributors.length && (
                <span className={styles.contributors}>
                    / By <ul>{contributors.map((contributor, index) => {
                        return <li key={index}><a href={contributor.canonicalURL}>{contributor.names.first} {contributor.names.last}</a></li>
                    })}
                    </ul>
                </span>
            )}
        </div>
        <Dates dates={dates} short={false} />
    </div>
};

export default ArticleMetaData;
