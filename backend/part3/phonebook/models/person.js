const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((err) => {
    console.log('error connecting to MongoDB: ',err.message)
  })

const personSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String
})

personSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id.toString(); //_id property of Mongoose objects looks like a string, it is in fact an object
        delete returnedObject._id
        delete returnedObject.__v
    }
});

// The public interface of the module is defined by setting a value to the module.exports variable. We will set the value to be the Entry model. 
module.exports = mongoose.model('Person', personSchema)
// export default = mongoose.model('Person', personSchema)
