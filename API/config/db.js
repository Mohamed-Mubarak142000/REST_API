const mongoose = require("mongoose")


const connectDB = async () =>{
    
    try {
        const conn = await mongoose.connect("mongodb://localhost/ticketsMatch")
        
        console.log("CONNECT TO DATABADE..")

    } catch (error) {
        process.exit(1),
        console.log(error)
    }
}

module.exports = connectDB