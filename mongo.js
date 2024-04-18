
require('dotenv').config()

const mongoose  = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('Database Connected')
})
.catch((e)=>{
    console.log(e)
})


const mongoSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
            
        }
    }
)

const collection = mongoose.model('portfolio',mongoSchema)

module.exports = collection