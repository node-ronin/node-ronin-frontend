import { Meta } from "./meta";

export namespace Tags {
    export interface Tag {
        data: TagData[];
        meta: Meta;
    }

    export interface Tags{
        data: TagData[]
    }
    
    export interface TagData {
        id:         number;
        attributes: Attributes;
    }
    
    export interface Attributes {
        name:        string;
        slug:        string;
        // createdAt:   Date;
        // updatedAt:   Date;
        // publishedAt: Date;
    }
}