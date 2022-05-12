var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req,res,next){
    Message.find()
    .exec(function(err,result){
        if(err){
            return res.status(500).json({
                myErroTitle: "Erro na Busca",
                myError: err
            });
        }
        res.status(200).json({
            myMsgSucess: "Mensagens Recuperados com Sucesso",
            objSMessageSRecuperadoS: result
        });
    });
});

router.post('/', function (req,res,next){
    var message = new Message({
        content: req.body.content,
        user: req.body.userId,
        username: req.body.username

    });
    message.save(function(err, result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um Erro Aconteceu',
                myError: err
            });
        }
        res.status(201).json({
            myMsgSucess: "Mensagem Salva com Sucesso",
            objMessageSave: result
        });
    });
});

router.delete('/deletar/mensagens/:id', function(req, res, next){
    Message.deleteOne({ _id : req.params.id}).then(result=>{
        console.log(result);
        res.status(200).json({
            message: "Mensagem deletada."
        });
    });
});

module.exports = router;

