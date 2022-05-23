const {Router} = require("express")
const express = require("express")
const router = express.Router()

const {getTickets ,
     getTicket ,
    setTicket , 
    updateTicket , 
    deleteTicket
} = require("../controllers/ticketsController")

//create read updata delete

router.route("/")
    .get(getTickets)
    .post(setTicket)

router.route("/:id")
    .get(getTicket)
    .put(updateTicket)
    .delete(deleteTicket)


module.exports = router 