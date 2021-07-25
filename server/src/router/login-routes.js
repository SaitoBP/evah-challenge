const express = require('express')

const jwt = require('jsonwebtoken')

const login = express.Router()

const fake_user = {
  id: '1',
  name: 'Gabriel',
  email: 'gabriel@mail.com',
  password: 'admin',
}

login.post('/auth', (req, res) => {
  const { email, password } = req.body

  if (email === fake_user.email && password === fake_user.password) {
    jwt.sign(fake_user, 'fake_secret_key', (err, token) => {
      return res.json({
        user: {
          name: fake_user.name,
          email: fake_user.password,
        },
        token: `Bearer ${token}`,
      })
    })
  } else {
    return res.status(404).send({ message: 'User not Found' })
  }
})

module.exports = login
