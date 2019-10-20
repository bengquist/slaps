import React, { ReactNode } from 'react'
import Page from '../components/app/Page'

function ProfilePage() {
  return (
    <div>
      ProfilePage
    </div>
  )
}

ProfilePage.getLayout = (page: ReactNode) => (
  <Page>
    {page}
  </Page>
)

export default ProfilePage
