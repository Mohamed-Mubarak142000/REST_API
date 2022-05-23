const express = require("express")
const router = express.Router()
const {getClients , getClient , deleteClient} = require("../controllers/clientController")

router.get("/" , getClients)

router.route("/:id")
    .get(getClient)
    .delete(deleteClient)


module.exports = router