export namespace SEO {
    export interface SeoData {
        id:              number;
        metaTitle:       string;
        metaDescription: string;
        keywords:        string;
        metaImage: {
            data: {
                id:         number;
                attributes: Image;
            }
        };
        metaSocial: MetaSocial[]
        // metaRobots:      null;
        // structuredData:  null;
        // metaViewport:    null;
        // canonicalURL:    null;
    }

    interface MetaSocial {
        id:             number;
        socialNetwork:  string;
        title:          string;
        description:    string;
        image: {
            data: {
                id: number;
                attributes: Image
            }
        }
    }

    interface Image{
        name:           string;
        width:          number;
        height:         number;
        url:            string;
    }
}