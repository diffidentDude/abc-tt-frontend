import Content from "../../Content/Content";
import { EmbedProps } from "../../Embed/Embed";

export const ExternalLink = ({ embed, parameters, contents }: EmbedProps) => {
    const { title } = embed;
    const replacedContents = Object.assign({}, contents, { parameters: { href: embed.canonicalURL, title }})
    return <Content contents={replacedContents} embeddedMedia={[embed]} />
  }

  export default ExternalLink;