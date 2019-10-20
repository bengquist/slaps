import React, { ReactNode } from 'react'
import Layout from '../components/app/Layout'

function DashboardPage() {
  return (
    <div>
      DashboardPage
    </div>
  )
}

DashboardPage.getLayout = (page: ReactNode) => (
  <Layout>
    {page}
  </Layout>
)

export default DashboardPage
