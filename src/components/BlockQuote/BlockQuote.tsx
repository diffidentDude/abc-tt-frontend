import styles from './BlockQuote.module.css';

interface BlockQuoteProps {
    children: React.ReactNode
}

export const BlockQuote = ({ children }: BlockQuoteProps) => {
    return <blockquote className={styles.blockquote}>{children}</blockquote>
}