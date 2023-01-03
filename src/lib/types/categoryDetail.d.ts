export interface CategoryDetail {
    category: Category;
}

export interface Category {
    slug:  string;
    posts: Post[];
    title: string;
}

export interface Post {
    title:            string;
    slug:             string;
    shortDescription: string;
    createdAt:        Date;
}