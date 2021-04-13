const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const phoneNumber = process.argv[4]

const url =
  `mongodb+srv://fso-user-1:${password}@cluster0.aeq3j.mongodb.net/phone-book?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const entrySchema = new mongoose.Schema({
  name: String,
  phoneNumber: String
})

const Entry = mongoose.model('Entry', entrySchema)

const entry = new Entry({ name, phoneNumber })

if(name && phoneNumber){
    entry.save().then(result => {
        console.log('added '+name+' number '+ phoneNumber+' to phonebook')
        mongoose.connection.close()
      })
}else if(name == undefined && phoneNumber == undefined){
    Entry.find({}).then(result => {
        result.forEach(e => {
          console.log(e.name + ' '+ e.phoneNumber);
        })
        mongoose.connection.close() // database connection will be closed
      })
}

