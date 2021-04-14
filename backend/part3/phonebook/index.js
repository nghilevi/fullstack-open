require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person') // Person model / resource

const app = express()

// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static('build'))

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
    Person.find({}).then(result => {
        res.json(result)
    })
})

app.get('/api/persons/:id', (req, res) => {
    const searchId = req.params.id;
    
    // TODO why _id not id
    Person.find({_id: searchId}).then((foundProfile) => {
        if(foundProfile){
            res.json(foundProfile)
        }else{
            res.status(404).end()
        }
    }).catch((err) => {
        console.log('error fetching: ',err.message)
    })
})

app.get('/info', (req, res) => {
    res.send(`
        <p>Phonebook has info for ${phonebooks.persons.length} people</p>
        <p>${new Date()}</p>
    `)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    phonebooks.persons = phonebooks.persons.filter(person => person.id !== id)

    Person.remove({_id: id}).then((foundProfile) => {
        res.status(204).end()
    }).catch((err) => {
        console.log('error removing: ',err.message)
    })
})

app.post('/api/persons/', (req, res) => { // the req body must be in the form of application/json
    const reqPerson = req.body
    console.log('reqPerson: ', reqPerson);

    if(!reqPerson.name || !reqPerson.number){
        return res.json('name or number is missing')
    }

    const person = new Person({
        name: reqPerson.name,
        number: reqPerson.number
    });

    person.save().then((savedPerson)=>{
        res.json(savedPerson)
    })
    
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
