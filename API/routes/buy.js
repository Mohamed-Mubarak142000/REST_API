const express = require("express")
const router = express.Router()

const {setTicketBuy , getTicketBuy } = require("../controllers/ticketBuyController")

router.route("/:id")
    .get(getTicketBuy)
    .post(setTicketBuy)


module.exports = router