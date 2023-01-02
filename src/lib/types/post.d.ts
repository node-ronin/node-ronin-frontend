import { Category } from "./category";
import { Tags } from "./tag";
import { SEO } from "./seo";
import { Meta } from "./meta";
export namespace Post {
    export interface SinglePost {
        data: PostDataDetail;
        meta: Meta;
    }

    export interface Posts{
        data: PostData[],
        meta: Meta
    }
    
    export interface PostData {
        id:         number;
        attributes: PostAttributes;
    }

    export interface PostDataDetail {
        id:         number;
        attributes: PostAttributes;
    }
    
    export interface PostAttributes {
        title:       string;
        description: string;
        body:        string;
        slug:        string;
        publishedAt:   Date;
        category:    Category.Category;
        SEO:         SEO.SeoData[];
        tags:        Tags.Tag;
    }
}