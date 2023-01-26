const path = require("path")

const mainController={

    index: (req,res)=>{
        res.render('index')
    },

    detalle: (req,res)=>{
        res.render('detalleMenu')
    }
}

module.exports=mainController