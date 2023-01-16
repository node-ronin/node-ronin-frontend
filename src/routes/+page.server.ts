import 'dotenv/config'
import type { PageServerLoad } from './$types';
import type { Home } from '$lib/types/posts'
import {request, gql} from 'graphql-request'


export const load: PageServerLoad = async() => {
    const query = gql`
    query HomeTestnet {
        homes {
          title
          image {
            url
          }
        }
      }
      
    `
    const data: Home = await request(process.env.API_ENDPOINT, query)
    return data
}