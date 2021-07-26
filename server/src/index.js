const express = require('express')

const cors = require('cors')

const login_routes = require('./router/login-routes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/login', login_routes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running onport: ${PORT}`))
