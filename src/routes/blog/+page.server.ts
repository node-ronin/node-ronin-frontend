import 'dotenv/config'
import axios from 'axios'
import type { PageServerLoad } from './$types';
import type {Post} from '$lib/types/index'
import type { Category } from '$lib//types/category';
import type { Tags } from '$lib//types/tag';

export const load: PageServerLoad = async() => {
    const res = await axios.get(`${process.env.API_ENDPOINT}/posts?populate=deep,2`)
    const cat = await axios.get(`${process.env.API_ENDPOINT}/categories`)
    const tags = await axios.get(`${process.env.API_ENDPOINT}/tags`)

    const tags_result: Tags.Tags = tags.data
    const cat_result: Category.Categories = cat.data
    const post_result: Post.Posts = res.data

    return {
        categories: cat_result,
        posts: post_result,
        tags: tags_result
    }
}