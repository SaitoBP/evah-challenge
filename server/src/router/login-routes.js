const express = require('express')

const login = express.Router()

login.post('/auth', (req, res) => {
  res.json({ Teste: 'Ola' })
})

module.exports = login
