var express = require('express'); 
var router = express.Router();

var User = require('../models/user');
var Message = require('../models/message');
router.get('/enviarMensagem', function(req, res, next){
    res.render('sendMessage')
});

router.post('/enviarMensagem', function(req, res, next) {
    var messageVar = req.body.messageBody;
    console.log('!!' + messageVar);

    var userObject = new User({
        firstName: 'Arthur',
        lastName: 'Miertschink',
        password:  'senha',
        email: messageVar
    })

    userObject.save();
    res.redirect('/enviarVerUsuario');
});

router.get("/enviarVerUsuario", function(req, res, next){
    User.findOne({}, function(err, documents){
        if(err){
            return res.send("Erro!!!")
        }
        res.render('sendMessage', {
            firstNameV: documents.firstName,
            lastNameV: documents.lastName,
            passwordV: documents.password,
            emailV: documents.email,
            messagesV: documents.message
        });
    });
});


router.get('/', function (req, res, next) {
     res.render('index');
 });

router.put("/editar/mensagens/:id",(req, res, next) =>{
    const message = ({
        content: req.body.content,
        username: req.body.username
    });

    Message.updateOne({_id:req.params.id}, message).then(result =>{
        console.log(result);
        res.status(200).json({message: "Foi!"})
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




// router.get('/mensagem/:msgParam', function (req, res, next) {
//     res.render('sendMessage', {message: req.params.msgParam});
// });

module.exports = router;
