let express = require("express");
let router = express.Router();

let pneuController = require("../controllers/pneuController");

router.get("/buscar/:idCarro", function (req,res){
    pneuController.buscar(req,res);
});

router.post("/cadatrar",function(req,res){
    pneuController.cadastrar(req,res);
})

router.put("/atualizar", function(req,res){
    pneuController.atualizar(req,res);
})

module.exports = router;