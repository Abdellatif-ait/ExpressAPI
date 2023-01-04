const mongoose= require('mongoose');

function connectDB(){
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log('db connected')
    }).catch(e=>{
        console.log(`something went wrong with the DB: ${e.message}`)
    })
}
module.exports=connectDB
