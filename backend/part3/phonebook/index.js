const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

const phonebooks = {
    "persons": [
        {
            "name": "Arto Hellas",
            "number": "123123123",
            "id": 1
        },
        {
            "name": "Ada Lovelace",
            "number": "39-44-5323523",
            "id": 2
        },
        {
            "name": "Dan Abramov",
            "number": "1231231",
            "id": 3
        },
        {
            "name": "Mary Poppendieck",
            "number": "39-23-6423122",
            "id": 4
        }
    ]
}

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(phonebooks)
})

app.get('/api/persons/:id', (req, res) => {
    const searchId = req.params.id;
    const foundProfile = phonebooks.persons.find(profile => profile.id === parseInt(searchId));
    if(foundProfile){
        res.json(foundProfile)
    }else{
        res.status(404).end()
    }
})

app.get('/info', (req, res) => {
    res.send(`
        <p>Phonebook has info for ${phonebooks.persons.length} people</p>
        <p>${new Date()}</p>
    `)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    phonebooks.persons = phonebooks.persons.filter(person => person.id !== id)
    res.status(204).end()
})

app.post('/api/persons/', (req, res) => {
    const persons = phonebooks.persons;
    const reqPerson = req.body

    if(!reqPerson.name || !reqPerson.number){
        return res.json('name or number is missing')
    }

    if(persons.find(e => e.name == reqPerson.name)){
        return res.json('name must be unique')
    }

    const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
    
    reqPerson.id = maxId + 1;
    phonebooks.persons = phonebooks.persons.concat(reqPerson);
    res.json(phonebooks.persons)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
