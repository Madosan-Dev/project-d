let express = require("express");
let router = express.Router();

let carroController = require("../controllers/carroController");

// recebendo dados do HTML e direcionando para a função cadastrarCarro do carroController
router.post("/cadastrar", function (req, res){
    carroController.cadastrarCarro(req, res);
});

router.get("/buscar/:idUsuario", function (req, res){
    carroController.buscarCarro(req,res);
});

module.exports = router;