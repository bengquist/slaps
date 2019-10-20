import React, { ReactNode } from 'react'
import Page from '../components/app/Page'

function DashboardPage() {
  return (
    <div>
      DashboardPage
    </div>
  )
}

DashboardPage.getLayout = (page: ReactNode) => (
  <Page>
    {page}
  </Page>
)

export default DashboardPage
