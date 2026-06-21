import {createClient} from 'next-sanity'

const key = process.env.SANITY_SERVER_ID || ''
export default createClient({
    dataset: 'production', 
    projectId: key,
    apiVersion: '11-06-2026', 
    useCdn: true
})