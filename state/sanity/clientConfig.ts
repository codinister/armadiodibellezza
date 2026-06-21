'use client'

import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import schemaType from './index'

const key = process.env.NEXT_PUBLIC_SANITY_CLIENT_ID || ''
export default defineConfig({
    dataset: 'production', 
    projectId: key,
    title: 'armadiodibellezza',
    basePath: '/admindashboard', 
    schema: {
        types: schemaType
    }, 
    plugins: [
        structureTool()
    ]

})