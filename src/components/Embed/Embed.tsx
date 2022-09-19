import { NodeDef } from "../../data/data";
import { ExternalLink } from "../embedded/ExternalLink/ExternalLink";
import { Teaser } from "../embedded/Teaser/Teaser";
import { Image } from "../embedded/Image/Image";
import styles from "./Embed.module.css";
import { Interactive } from "../embedded/3rd-party/Interactive/Interactive";

export interface EmbedProps {
    embed: any;
    parameters?: {
      [key: string]: string;
    }
    contents?: NodeDef;
  }
  
  export const Embed = ({ embed, parameters, contents }: EmbedProps) => {
    const { docType } = embed;
    switch (docType) {
      case "ImageProxy" || "Image":
        return <Image embed={embed} parameters={parameters} contents={contents} />;
      case "Teaser":
        return <Teaser embed={embed} parameters={parameters} contents={contents} />;
      case "ExternalLink":
        return <ExternalLink embed={embed} parameters={parameters} contents={contents} />;
      case "Interactive":
        return <Interactive embed={embed} parameters={parameters} contents={contents} />;
    }
    return null;
  }


  export default Embed;