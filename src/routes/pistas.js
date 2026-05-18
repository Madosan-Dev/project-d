let express = require("express");
let router = express.Router();

let pistaController = require("../controllers/pistaController");

router.get("/buscarPistas", function (req,res){
    pistaController.buscarPistas(req,res);
});

router.post("/cadastrar", function(req,res){
    pistaController.cadastrar(req,res);
});

router.get("/buscar/:id", function (req,res){
    pistaController.buscar(req,res);
});

module.exports = router;