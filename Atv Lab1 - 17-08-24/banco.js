const Sequelize = require('sequelize')
const sequelize = new Sequelize('dbatvum', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso.')
}).catch(function(erro){
    console.log('Falha ao se conectar: ' + erro)
})

const Clientes = sequelize.define('clientes', {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    }
});

        Clientes.sync({ force: true });

         Cliente.Create([
            {
                nome: 'João Silva',
                endereco: 'Rua A, 123',
                bairro: 'Centro',
                cep: '12345-678',
                telefone: '1234-5678',
                celular: '98765-4321'
            },
            {
                nome: 'Maria Oliveira',
                endereco: 'Rua B, 456',
                bairro: 'Jardim',
                cep: '23456-789',
                telefone: '2345-6789',
                celular: '87654-3210'
            },
            {
                nome: 'Carlos Souza',
                endereco: 'Rua C, 789',
                bairro: 'Vila Nova',
                cep: '34567-890',
                telefone: '3456-7890',
                celular: '76543-2109'
            }
        ]);