import React, { ReactNode } from 'react'
import Page from '../components/app/Page'

function FeedPage() {
  return (
    <div>
      FeedPage
    </div>
  )
}

FeedPage.getLayout = (page: ReactNode) => (
  <Page>
    {page}
  </Page>
)

export default FeedPage
