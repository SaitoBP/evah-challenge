import React, { createContext } from 'react'
import ReactDOM from 'react-dom'

import Routes from './pages/Routes'

const user = {
  user: {},
  token: '',
}

export const UserContext = createContext(user)

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={user}>
      <Routes />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
