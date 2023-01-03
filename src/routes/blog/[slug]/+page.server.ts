import 'dotenv/config'
import type { PageServerLoad } from './$types';
import {request, gql} from 'graphql-request'
import type { Post } from '$lib//types/postDetail';

export const load: PageServerLoad = async({params}) => {
    const query = gql`
    query Posts {
        post(where: {slug: "${params.slug}"}) {
          id
          slug
          title
          createdAt
          body {
            html
          }
          tags {
            title
            slug
          }
          category {
            slug
            title
          }
          seo {
            keywords
            metaDescription
            canonicalUrl
            metaRobots
            metaSocial {
              ... on SocialNetwork {
                description
                socialNetwork
                title
                image {
                  url
                }
              }
            }
            metaTitle
            metaViewport
            structuredData
          }
        }
        tags {
          slug
          id
          title
        }
        categories {
          id
          slug
          title
        }
      }
    `

    const data: Post = await request(process.env.API_ENDPOINT, query)
    return data
}