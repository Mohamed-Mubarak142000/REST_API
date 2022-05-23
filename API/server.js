  
  const express = require("express");
    const app = express()
    //port 8000 or 5000
    const port =process.env.PORT || 6000

    //error handler
    const errorMiddleHandler = require("./middleWire/errorMiddle")

    //function connected database
    const database = require("./config/db")
    database()


    app.use(express.json())

    app.use(express.urlencoded({
        extended:false
    }))


    app.use("/api/tickets" , require('./routes/tickets'))
    app.use("/api/clients" , require('./routes/clients'))
    app.use("/api/buy" , require('./routes/buy'))

    app.listen(port , ()=>{
        console.log(`start server on port ${port}`)
    })

    app.use(errorMiddleHandler)