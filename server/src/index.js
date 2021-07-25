const express = require('express')

const login_routes = require('./router/login-routes')

const app = express()

app.use('/login', login_routes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running onport: ${PORT}`))
