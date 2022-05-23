
const Tickets = require("../models/ticketsModel")
const asyncHandler = require("express-async-handler")



//method GIT *** api/tickets  //All Tickects
const getTickets =asyncHandler( async (req ,res) =>{
    
    const allTickets = await Tickets.find()

    if(!allTickets)
    {
        res.status(500)
        throw new Error("Not Found Tickets.."),
        console.log("Not Found..")
    }else
    { 
        res.status(200).json(allTickets)
    }    


})


//method GIT *** api/tickets/:id   //One Ticket using by Id...
const getTicket = asyncHandler( async (req ,res) =>{
    
    const ticketOne = await Tickets.findById(req.params.id)
    
    if(!ticketOne)
    {
        res.status(500)
        throw new Error("Not Found This is Ticket.."),
        console.log("Not Found..")
    }else
    { 
        res.status(200).json(ticketOne)
    }    
})

//method ==> post **** url ==> /api/tickets/:id   //insert new ticket...
const setTicket =asyncHandler( async (req ,res) =>{
   
    const tickets = await Tickets.create({      
        header:req.body.header,
        date:req.body.date,
        getOpen:req.body.getOpen,
        stadium:req.body.stadium,
        team1:req.body.team1,
        team2:req.body.team2,
        price:req.body.price,
        color:req.body.color,
        round:req.body.round            
    })

    
    res.status(201).json(tickets)

})


//method ==>put *** url ==> /api/tickets/:id   // UpDate Tickect by Id..
const updateTicket =asyncHandler( async (req ,res) =>{
   
    const ticket = await Tickets.findById(req.params.id)

    if(!ticket){
        res.status(500)
        throw new Error("Not Found Ticket..")
    }else{
        const upDateTick = await Tickets.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new: true
            })

        res.status(200).json(upDateTick)
    }


})

//method ==> delete *** url==> /api/tickects/:id   //Delete Ticket by Id..
const deleteTicket =asyncHandler( async (req ,res) =>{
    
    const ticket = await Tickets.findById(req.params.id)

    if(!ticket){
        res.status(500)
        throw new Error("Not Found Ticket..")
    }else{
        await ticket.remove()
        res.status(200).json({
            id: req.params.id,
            massage:`Ticket id ${req.params.id} has been delete..`
        })
    }
})

module.exports = {
    getTickets,
    getTicket,
    setTicket,
    updateTicket,
    deleteTicket
}