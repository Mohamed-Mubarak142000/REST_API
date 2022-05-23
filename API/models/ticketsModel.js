const mongoose = require("mongoose")

const tickectsSchema = mongoose.Schema({
    
    header:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    getOpen:{
        type: String,
        required: true,
    },
    stadium:{
        type: String,
        required: true,
    },
    team1:{
        type: String,
        required: true,
    },
    team2:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    color:{
        type: String,
        required: true,
    },
    round:{
        type: String,
        required: true,
    }

})

module.exports = mongoose.model("Tickets" , tickectsSchema)