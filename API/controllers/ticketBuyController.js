const asyncHandler = require("express-async-handler")
const Tickets = require("../models/ticketsModel")
const clients = require("../models/ClientModel")

// method ==> get *** url ==> api/buy/:id
const getTicketBuy = asyncHandler ( async (req ,res) =>{
    
    const tickect = await Tickets.findById(req.params.id)

    if(!tickect){
        res.status(500)
        throw new Error("Not Found Ticket...")
    }
    else{
        res.status(200).json(tickect)
    }

})

// method ==> post *** url ==> api/buy/:id
const setTicketBuy = asyncHandler (async (req ,res) =>{
    
    const tickect = await Tickets.findById(req.params.id)

    const client = await clients.create({
        fristName: req.body.fristName,
        lastName : req.body.lastName,
        tickectId : req.params.id
    })

    res.status(201).json(client)

})

module.exports = {
    getTicketBuy , 
    setTicketBuy
}