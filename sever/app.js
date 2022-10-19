const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

const fetch = require('./fetch');


app.use(cors())

app.get('/:name', async (req, res) =>{

    const googleData = await fetch.callGoogle(req.params.name);
    res.send(googleData)
})

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})
