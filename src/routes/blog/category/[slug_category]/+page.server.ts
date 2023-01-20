import 'dotenv/config';
import type { PageServerLoad } from './$types';
import { request, gql } from 'graphql-request';
import type { CategoryDetail } from '$lib//types/categoryDetail';

export const load: PageServerLoad = async ({ params }) => {
	const query = gql`
          query Category {
            category(where: {slug: "${params.slug_category}"}) {
              slug
              posts {
                title
                slug
                shortDescription
                createdAt
              }
              title
            }
          }
    `;
	const data: CategoryDetail = await request(process.env.API_ENDPOINT, query);
	return data;
};
