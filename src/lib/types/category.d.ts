import { Meta } from "./meta";

export namespace Category {
    export interface Categories {
        data: CategoryData[];
        meta: Meta;
    }

    export interface Category{
        data: CategoryData
    }
    
    export interface CategoryData {
        id:         number;
        attributes: CategoryAttributes;
    }
    
    export interface CategoryAttributes {
        name:        string;
        slug:        string;
        color:       string;
        // createdAt:   Date;
        // updatedAt:   Date;
        // publishedAt: Date;
    }
    
}