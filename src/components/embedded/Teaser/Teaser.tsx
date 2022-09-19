import { Content } from "../../Content/Content";
import { EmbedProps } from "../../Embed/Embed";
import styles from './Teaser.module.css';

export const Teaser = ({ embed, parameters }: EmbedProps) => {
    const { title } = embed;
    return <aside className={styles.teaser}>
        <Content contents={embed.teaserText.json} embeddedMedia={embed._embedded.mediaEmbedded} />
    </aside>;
  }

  export default Teaser;