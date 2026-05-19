let express = require("express");
let router = express.Router();

let graficoController = require("../controllers/graficoController");

router.get("/buscarCorridas/:idUsuario", function(req,res){
    graficoController.buscarCorridas(req,res);
});

module.exports = router;