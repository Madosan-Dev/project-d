var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.put("/atualizarDescricao/:idUsuario", function(req,res){
    usuarioController.atualizarDescricao(req,res);
});

router.get("/buscarDescricao/:idUsuario", function (req,res){
    usuarioController.buscarDescricao(req,res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/buscarFoto/:idCorredor", function (req, res){
    usuarioController.buscarFotoCorredor(req,res);
})

router.get("/buscar", function (req,res){
    usuarioController.buscarCorredores(req,res)
})

module.exports = router;