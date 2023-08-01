import React from 'react'

import styles from './UserProfileCard.module.css'
import { User } from './User'
import Card from './Card'

function UserProfileCard({ user }: { user: User }) {
  const profileUrl = `/users/${user.handle}`
  const imageAlt = `${user.avatarDescription} (user profile photo)`

  return (
    <Card elevation={1}>
      <img className={styles.avatar} alt={imageAlt} src={user.avatarSrc} />
      <a href={profileUrl} className={styles.userProfileLink}>
        {user.name}
      </a>
    </Card>
  )
}

export default UserProfileCard
