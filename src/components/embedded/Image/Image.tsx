import { EmbedProps } from "../../Embed/Embed";
import styles from './Image.module.css';

  
  export const Image = ({ embed, parameters }: EmbedProps) => {
    const asset = embed.media.image.primary.complete[0];
    return <figure className={parameters?.align === "right" ? styles.right : ""}>
      <img src={asset.url} alt={embed.alt} width={asset.width} height={asset.height} />
      <figcaption>{embed.caption}</figcaption>
    </figure>;
  }

  export default Image;