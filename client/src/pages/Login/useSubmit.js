import { useContext } from 'react'
import { UserContext } from '../..'

import { useHistory } from 'react-router'

const useSubmit = () => {
  const user = useContext(UserContext)

  const history = useHistory()

  const onSubmit = async data => {
    /* Fetch from API*/
    const response = await fetch('http://localhost:5000/login/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.status === 200) {
      const response_data = await response.json()

      user.user = response_data.user
      user.token = response_data.token

      history.push('/landing-page')

      console.log(user)
    }
  }

  return { onSubmit: onSubmit }
}

export default useSubmit
