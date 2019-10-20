import React, { ReactNode } from 'react'
import Layout from '../components/app/Layout'

function FeedPage() {
  return (
    <div>
      FeedPage
    </div>
  )
}

FeedPage.getLayout = (page: ReactNode) => (
  <Layout>
    {page}
  </Layout>
)

export default FeedPage
