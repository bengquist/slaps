import React, { ReactNode } from 'react'
import Layout from '../components/app/Layout'

function StatsPage() {
  return (
    <div>
      StatsPage
    </div>
  )
}

StatsPage.getLayout = (page: ReactNode) => (
  <Layout>
    {page}
  </Layout>
)

export default StatsPage
