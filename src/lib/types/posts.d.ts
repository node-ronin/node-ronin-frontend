export interface Posts {
    posts:      Post[];
    tags:       Tag[];
    categories: CategoryElement[];
}

export interface Tag {
    id?:    string;
    slug:   string;
    title:  string;
}


export interface CategoryElement {
    id:    string;
    slug:  string;
    title: string;
    color: {
        hex: string;
    }
}

export interface Post {
    id:               string;
    createdAt:        Date;
    slug:             string;
    title:            string;
    shortDescription: string;
    category:         PurpleCategory;
    tags:             CategoryElement[];
    banner:           Banner;
}

export interface Banner {
    id:  string;
    url: string;
}

export interface PurpleCategory {
    slug:  string;
    title: string;
    color: Color;
}

export interface Color {
    hex: string;
}
