const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

characters = [
    {
        id: 1,
        name: "Walter White",
        description: "Walter Hartwell 'Walt' White Sr., also known by his clandestine pseudonym and business moniker Heisenberg and also frequently referred to as Mr. White, is a former chemist and major narcotics distributor from Albuquerque, New Mexico, whose drug empire became the largest meth operation in American history, surpassing both Gustavo Fring's drug empire and the Cartel's."
    },
    {
        id: 2,
        name: "Skyler White",
        description: "Skyler 'Sky' White (née Lambert) is the wife of Walter White and the sister of Marie Schrader. She and Walter have a teenage son, Walter White Jr., and an infant daughter, Holly White. She has had several meager sources of income: writing short stories, selling items on eBay, working as a bookkeeper, and ultimately helping her husband launder money."
    },
    {
        id: 3,
        name: "Walter Jr",
        description: "Walter Hartwell White Jr., commonly known simply as Walt Jr. or Junior and also by his alias 'Flynn', is Walter and Skyler's seventeen-year-old son, and the older brother of Holly. He attends J. P. Wynne High School, where his father used to work as a high school chemistry teacher. He has cerebral palsy, as manifested in speech difficulties and impaired motor control, for which he uses crutches."
    },
    {
        id: 4,
        name: "Jesse Pinkman",
        description: "Jesse Bruce Pinkman, also known by his clandestine pseudonym and business moniker Cap'n Cook, is a former chemist, manufacturer, and distributor who worked in Albuquerque, New Mexico, currently residing in Haines, Alaska. Originally a low-level methamphetamine dealer who worked with his friend and fellow meth cook Emilio Koyama, Jesse is best known as the former business and meth cook partner of his former chemistry teacher Walter White"
    },
    {
        id: 5,
        name: "Hank Schrader",
        description: "Henry R. 'Hank' Schrader is a high-ranking officer at the Albuquerque office of the Drug Enforcement Administration (DEA), starting out as a DEA agent alongside his close friend and partner Steven Gomez, and later being promoted to Assistant Special Agent in Charge of the DEA (ASAC). Hank is the husband of Marie Schrader and the brother-in-law of Skyler and Walter White, as well as the uncle of Walter White Jr. and Holly"
    },
    {
        id: 6,
        name: "Gus Fring",
        description: "Gustavo 'Gus' Fring, also referred to as the Chicken Man and the Chilean, is a Chilean-American restaurant entrepreneur and major narcotics distributor who primarily worked in Albuquerque, New Mexico. Originally collaborating with the Mexican drug cartel to distribute cartel cocaine, Gus eliminated his dependence on the cartel and began distributing methamphetamine himself, and eventually became the kingpin of his solo drug empire"
    },
    {
        id: 7,
        name: "Mike Ehrmantraut",
        description: "Michael 'Mike' Ehrmantraut is an American career criminal, Marine Corps veteran, and former Philadelphia police officer. Calm and calculating, Mike later became a private investigator, hitman, assassin, and violent fixer for drug traffickers to financially support his family (his daughter-in-law Stacey and granddaughter Kaylee). He worked for both Gustavo Fring and Saul Goodman as a private investigator, head of security, cleaner, fixer, and hitman."
    },
    {
        id: 8,
        name: "Saul Goodman",
        description: "James Morgan 'Jimmy' McGill, better known by his professional alias and business moniker Saul Goodman, is an Irish-American criminal defense lawyer, scam artist, and convicted criminal who is serving an 86-year sentence at ADX Montrose. Originally from Cicero, Illinois during his career as a scam artist, Jimmy moved to Albuquerque, New Mexico where he worked as a lawyer, and later resided as a fugitive in Omaha, Nebraska before being caught and apprehended in a federal prison at Montrose, Colorado."
    },
    {
        id: 9,
        name: "Jane",
        description: "Jane Margolis is a tattoo artist and Jesse Pinkman's neighbor, landlord and girlfriend. She is also a recovering drug addict and the daughter of Donald Margolis, an air-traffic controller."
    },
    {
        id: 10,
        name: "Huell",
        description: "Huell Babineaux is Saul Goodman's former employee and personal bodyguard, who also executes various intimidation tactics and performs other errands. He provided a variety of services to Saul, including personal protection, intimidation and pick-pocketing. Huell also worked as an accomplice of Saul's bodyguard, Patrick Kuby, who were referred to as Saul's 'A-Team.'"
    }
]

function getRandomChar(characters){
    return characters[Math.floor(Math.random()*characters.length)]
}

app.use(cors())

app.get('/', (req, res) =>{ res.send('Hello World')})

app.get('/characters', (req, res) =>{ res.send(characters)})

app.get('/characters/:id', (req, res) =>{ 
    const character = characters.find((c) => c.id === parseInt(req.params.id))

    if(!character) return res.status(404).send('This character is not in our list')

    res.send(character)
})

app.get('/characters/random', (req, res) => res.send(getRandomChar(characters)))

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})
