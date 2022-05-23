const mongoose = require("mongoose")


const clientSchema = mongoose.Schema({
    fristName:{
        type : String ,
        required : true
    },
    lastName:{
        type : String ,
        required : true
    },
    ticketId:{
        type : String ,
        required : true
    },
    ticketId:{
        type : String ,
        required : true
    }
})

module.exports = mongoose.model("Clients" , clientSchema)