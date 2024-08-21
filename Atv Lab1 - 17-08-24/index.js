const express = require('express')
const app = express()

app.listen(8081, function(){
    console.log('Server ativo')
})

app.get('/cadastro/:nome/:sobrenome/:idade', function (req, res) {
    res.send(`Cadastro realizado: Nome: ${nome}, Sobrenome: ${sobrenome}, Idade: ${idade}`);
});