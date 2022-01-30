const express = require("express")
const app=express()
const rutasMain =require("./routers/mainRouts.js")
app.set('view engine', 'ejs')

app.use(express.static("public"))

app.listen(process.env.PORT||3000, function() {
    console.log('Servidor funcionando');
});

app.use("/",rutasMain )