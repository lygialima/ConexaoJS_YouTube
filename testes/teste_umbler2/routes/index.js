/* esse arquivo é o roteador q intercepta requisições da view usando funções de callback. */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Umbler' });
});

/* GET new page. */
router.get('/new', function(req, res, next) {
    res.render('new', { title: 'Novo Cadastro' });
});

/* POST new page. */
router.post('/new', function(req, res, next) {
    var nome = req.body.nome;
    var idade = req.body.idade;
    res.redirect('/?nome=' + nome);
});

module.exports = router;
