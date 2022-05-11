var express = require('express'); 
var router = express.Router();

var User = require('../models/user');

router.get('/:email/:password', function(req,res,next){
    User.findOne({'email': req.params.email, 'password': req.params.password})
    .exec(function(err,result){
        if(!result || err){
            return res.status(404).json({
                myErroTitle: "Login ou Senha Invalidos!",
                myError: err
            });
        }
        return res.status(200).json({
            myMsgSucess: "Usuário Encontrado!",
            objSUserSRecuperadoS: result
        }); 
    });
});

router.post('/', function(req,res,next){
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        sexo: req.body.sexo
    })
    user.save(function(err, result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um Erro Aconteceu',
                myError: err
            });
        }
        res.status(200).json({
            myMsgSucess: "Usuário Salvo com Sucesso",
            objMessageSave: result
        });
    });
});

module.exports = router;
