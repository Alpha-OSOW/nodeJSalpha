const {Router}= require("express")

const route = Router();

route.get("/", function (request , reponse ){
    reponse.json({msg : "fonction"})
})


module.express = route ;