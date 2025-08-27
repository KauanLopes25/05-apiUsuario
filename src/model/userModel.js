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


******************************** BIBLIOTECAS UTILIZADAS *************************************


********************************************************************************************/

// Simulação de um banco de dados em memória
let users = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com'},
    {id: 1, name: 'Maximus', email: 'maximus@gmail.com'},
    {id: 1, name: 'Ragnar', email: 'ragnar@gmail.com'}
]

// Função para buscar todos os usuáruos
const findAll = () => {
    return users;
}