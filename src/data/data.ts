export interface Contributor {
    id: string;
    names: Names;
    canonicalURL: string;
    role: string;
}

export interface Names {
    first: string;
    last: string;
    full: string;
}

export interface Source {
    sourceName: string;
    sourceURL: string;
}

export interface NodeDef {
    type: string;
    tagname?: string;
    parameters?: {
        [key: string]: string;
    },
    content?: string;
    children?: Array<NodeDef>;
}
