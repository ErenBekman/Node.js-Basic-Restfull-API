const express = require('express')
require('./db/connection')
const errorMiddleware = require('./middleware/error')
const userRouter = require('./router/users')
const app = express()
const port = 3016


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/users', userRouter)
app.use(errorMiddleware)

app.listen(port, () => {
    console.log('server have started')
})
