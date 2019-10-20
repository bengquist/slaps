import React, { ReactNode } from 'react'
import Page from '../components/app/Page'

function StatsPage() {
  return (
    <div>
      StatsPage
    </div>
  )
}

StatsPage.getLayout = (page: ReactNode) => (
  <Page>
    {page}
  </Page>
)

export default StatsPage
