import { getDateTimeString, getShortDateTimeString } from "../../utils/getDateTimeString"
import styles from "./Dates.module.css";

interface DatesProps {
    dates?: {
        displayPublished: string;
        displayUpdated?: string;
    };
    short: boolean;
};

export const Dates = ({ dates, short }: DatesProps) => {
    const datePublished = dates ? new Date(dates.displayPublished) : null;
    const dateUpdated = dates && dates.displayUpdated ? new Date(dates.displayUpdated) : null;
    return <>{dates && (
        <span className={styles.date}>
            {datePublished && (<span>Posted {short? getShortDateTimeString(datePublished) : getDateTimeString(datePublished)}</span>)}
            {dateUpdated && (<span>{', '}Updated {short? getShortDateTimeString(dateUpdated) : getDateTimeString(dateUpdated)}</span>)}
        </span>
    )}</>
};

export default Dates;