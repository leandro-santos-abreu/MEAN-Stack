var express = require('express'); 
var router = express.Router();

var User = require('../models/user');
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




// router.get('/mensagem/:msgParam', function (req, res, next) {
//     res.render('sendMessage', {message: req.params.msgParam});
// });

module.exports = router;
