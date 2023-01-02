import 'dotenv/config'
import axios from 'axios'
import type { PageServerLoad } from './$types';
import type { Post } from '$lib//types/post';
import type { Category } from '$lib//types/category';
import type { Tags } from '$lib//types/tag';

export const load: PageServerLoad = async({params}) => {
    const slug = await axios.get(`${process.env.API_ENDPOINT}/posts/slug/${params.slug}`)
    try {
        console.log(slug.data.data.id)
        const post = await axios.get(`${process.env.API_ENDPOINT}/posts/${slug.data.data.id}?populate=deep`)
        const cats = await axios.get(`${process.env.API_ENDPOINT}/categories`)
        const tags = await axios.get(`${process.env.API_ENDPOINT}/tags`)
        
        const post_results: Post.SinglePost = post.data
        const cat_results: Category.Categories = cats.data
        const tag_results: Tags.Tags = tags.data

        return {
            post: post_results,
            categories: cat_results,
            tags: tag_results
        }
        
    } catch (error) {
        console.log(error)
    }
}