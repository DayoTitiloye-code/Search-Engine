const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) =>{ res.send('Hello World')})

app.get('/characters', (req, res) =>{ res.send(characters)})

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})
