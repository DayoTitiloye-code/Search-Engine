const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

const fetch = require('./fetch');
const characters = require('./database');


app.use(cors())

//call /:summer from client side
//

app.get('/:name', async (req, res) =>{

    console.log(req)
    console.log('endpoint')
    const googleData = await fetch.callGoogle(req.params.name);
    res.send(googleData)
})

app.get('/characters', (req, res) =>{ 
    res.send(characters)
})

// app.get('/characters/rand', (req, res) =>{ 
//     res.send(getRandomChar())
// })

// app.get('/characters/:id', (req, res) =>{ 
//     const character = characters.find((c) => c.id === parseInt(req.params.id))
//     if(!character) return res.status(404).send('This character is not in our list')

//     res.send(character)
// })


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})
