import 'dotenv/config';
import type { PageServerLoad } from './$types';
import type { Posts } from '$lib/types/posts';
import { request, gql } from 'graphql-request';

export const load: PageServerLoad = async () => {
	const query = gql`
		query Posts {
			posts (orderBy: createdAt_DESC) {
				id
				publishedAt
				slug
				title
				shortDescription
				category {
					slug
					title
					color {
						hex
					}
				}
				tags {
					id
					slug
					title
				}
				banner {
					id
					url
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
				color {
					hex
				}
			}
		}
	`;

	const data: Posts = await request(process.env.API_ENDPOINT, query);
	return data;
};
