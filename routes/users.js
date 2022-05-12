var express = require('express'); 
var router = express.Router();

var User = require('../models/user');

router.get('/:email/:password', function(req,res,next){
    User.updateOne({'email': req.params.email, 'password': req.params.password}, {'logado': true},
    function( err, result){
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

router.get('/deslogar', function(req,res,next){
    User.updateOne({'logado': true}, {'logado': false},
    function( err, result){
        if(!result || err){
            return res.status(404).json({
                myErroTitle: "Erro",
                myError: err
            });
        }
        return res.status(200).json({
            myMsgSucess: "Usuário Deslogado!",
            objSUserSRecuperadoS: result
        }); 
    });

});

router.get('/logado', function(req,res,next){
    User.findOne({'logado': true})
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

router.get('/:id', function(req,res,next){
    User.findOne({'_id': req.params.id})
    .exec(function(err,result){
        if(!result || err){
            return res.status(404).json({
                myErroTitle: "Usuário Indefinido",
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
        sexo: req.body.sexo,
        logado: req.body.logado
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
