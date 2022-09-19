import { EmbedProps } from "../../../Embed/Embed";


export const Interactive = ({ embed, parameters }: EmbedProps) => {
    return <span>Instagram embed: <a href={embed.externalembed.url}>LINK</a></span>
}

export default Interactive;