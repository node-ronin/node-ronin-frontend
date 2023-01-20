export interface Post {
    post:       PostData;
    tags:       Tag[];
    categories: Category[];
}

export interface Category {
    id?:    string;
    slug:   string;
    title:  string;
    color?: Color;
}

export interface Tag {
    id?:    string;
    slug:   string;
    title:  string;
}

export interface Color {
    hex: string;
}

export interface PostData {
    id:        string;
    slug:      string;
    title:     string;
    createdAt: Date;
    body:      Body;
    tags:      Tag[];
    category:  Category;
    seo:       SEO;
}

export interface Body {
    html: string;
}

export interface SEO {
    keywords:        string[];
    metaDescription: string;
    canonicalUrl:    null;
    metaRobots:      null;
    metaSocial:      MetaSocial[];
    metaTitle:       string;
    metaViewport:    null;
    structuredData:  null;
}

export interface MetaSocial {
    description:   string;
    socialNetwork: string;
    title:         string;
    image:         Image;
}

export interface Image {
    url: string;
}

export interface Tag {
    title: string;
    slug:  string;
}
