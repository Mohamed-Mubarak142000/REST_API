
const asyncHandler = require("express-async-handler")
const Clients = require("../models/ClientModel")

//  method ==> GIT *** url ==> /api/clients
const getClients = asyncHandler ( async (req , res) =>{
    
    const client = await Clients.find()
    if(!client){
        res.status(500)
        throw new Error ("Clients Not Found..")
    }else
    {
        res.status(200).json(client)

    }
}
)

//  method ==> GIT *** url ==> /api/client/:id
const getClient = asyncHandler( async (req , res) =>{
    
    const client = await Clients.findById(req.params.id)
    if(!client){
        res.status(500)
        throw new Error ("Client Not Found..")
    }else
    {
        res.status(200).json(client)

    }
}
)

//  method ==> DELETE *** url ==> /api/client/:id
const deleteClient = asyncHandler( async (req , res) =>{
  
    const client = await Clients.findById(req.params.id)
    if(!client){
        res.status(500)
        throw new Error ("Client Not Found..")
    }else
    {
        await client.remove()
        res.status(200).json({
            "_id":req.params.id,
            massage:`Remove client Id ${req.params.id}`
        })

    }

}
)

module.exports = {
    getClient,
    getClients,
    deleteClient
}