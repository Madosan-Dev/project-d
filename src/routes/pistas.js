let express = require("express");
let router = express.Router();

let pistaController = require("../controllers/pistaController");

router.get("/buscarPistas", function (req,res){
    pistaController.buscarPista(req,res);
});