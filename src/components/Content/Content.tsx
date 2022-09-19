import React from "react";
import { NodeDef } from "../../data/data";
import { BlockQuote } from "../BlockQuote/BlockQuote";
import { Embed } from "../Embed/Embed";

interface ContentProps {
    contents: NodeDef;
    embeddedMedia: any;
};

export const Content = ({ contents, embeddedMedia }: ContentProps) => {
    const { tagname, type, children, content, parameters } = contents;

    const childNodes = <>
        {children ? children.map((child, index) => {
            return <Content key={index} contents={child} embeddedMedia={embeddedMedia} />
        }) : null}
        {content}
    </>;
    if (tagname) {
        if (parameters?.ref) {
            // this anchor is referencing something else, we should look up and render that instead.
            const embed = embeddedMedia.find((embed: { id: string; }) => {
                return embed.id === parameters?.ref;
            });

            return <Embed embed={embed} parameters={parameters} contents={contents} />
        }
        // any specific handling of content from the API
        switch (tagname) {
            case "pullquote":
                return <BlockQuote>{childNodes}</BlockQuote>
            default:
                return React.createElement(tagname, parameters, childNodes);
        }
    }
    return childNodes;
}

export default Content;