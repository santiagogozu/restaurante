const express = require("express")
const app=express()
const rutasMain =require("./routers/mainRouts.js")
app.set('view engine', 'ejs')

app.use(express.static("public"))

app.listen(3000, ()=>{
    console.log("Servidor en puerto 3000")
})

app.use("/",rutasMain )