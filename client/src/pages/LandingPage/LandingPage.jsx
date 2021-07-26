import React, { useContext } from 'react'
import { UserContext } from '../..'

import { useHistory } from 'react-router'

import Typography from '../../components/Typography/Typography'
import Button from '../../components/Button/Button'

const LandingPage = () => {
  const user = useContext(UserContext)

  const history = useHistory()

  const onLogout = () => {
    history.push('/')
  }

  return (
    <section>
      <h1>Landing Page</h1>

      <Typography variant='p'>Bem vindo(a) {user.user.name}</Typography>

      <Button type='button' onClick={onLogout}>
        Logout
      </Button>
    </section>
  )
}

export default LandingPage
