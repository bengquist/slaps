import React, { ReactNode } from 'react'
import Layout from '../components/app/Layout'

function ProfilePage() {
  return (
    <div>
      ProfilePage
    </div>
  )
}

ProfilePage.getLayout = (page: ReactNode) => (
  <Layout>
    {page}
  </Layout>
)

export default ProfilePage
