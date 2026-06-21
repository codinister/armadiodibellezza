'use client'

import {NextStudio } from 'next-sanity/studio'
import clientConfig from '@/state/sanity/clientConfig'
const AdminDashboard = () => {
  return (
    <div className="mt-25">
    <NextStudio config={clientConfig} />
    </div>
  )
}

export default AdminDashboard