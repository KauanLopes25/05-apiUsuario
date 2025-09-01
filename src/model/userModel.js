'use strict'

/********************************************************************************************
* Objetivo: Arquivo responsavel pela comunicação com o banco de dados
* Autor: Kauan Lopes Pereira
* Data: 27/08/2025
* Versão: 1.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************
* find() - Retorna o primeiro valor encontrado com base no parametro fornecido
* ... - Serve para adicionar elementos entre arrays.
******************************** BIBLIOTECAS UTILIZADAS *************************************

********************************************************************************************/

// Simulação de um banco de dados em memória
let users = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com'},
    {id: 2, name: 'Maximus', email: 'maximus@gmail.com'},
    {id: 3, name: 'Ragnar', email: 'ragnar@gmail.com'}
]

// Função para buscar todos os usuáruos
const findAll = () => {
    return users;
}

// Função para buscar um usuário por ID
const findById = (id) => {
    return users.find(user => user.id === id)
}

// Função para adicionar um novo usuario
const create = (newUser) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    // User.length > 0                              Condição de comparação, indicada pelo?
    // User[user.length - 1].id + 1                 Execução caso atenda a condição de comparação
    // :1                                           Execução caso não atenda, indicado pelo :
    const userWithId = {id: newId, ...newUser}
    user.push(userWithId)
    return userWithId
}

// Exportar as funções
module.exports = {
    findAll,
    findById,
    create
}