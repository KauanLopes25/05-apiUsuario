'use strict'

/********************************************************************************************
* Objetivo: Criação de uma Web API com node.js
* Autor: Kauan Lopes Pereira
* Data: 27/08/2025
* Versão: 1.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************
* get() - 
* listen() -

******************************** BIBLIOTECAS UTILIZADAS *************************************
* express() - FrameWork para facilitar a criação de API

********************************************************************************************/


// Importar o módulo do Express
const express = require('express')

// Criar uma aplicação express
const app = express()

// Definir a porta em que o servidor irá escutar
const porta = 8000

// Rota de teste API
app.get('/', (req,res) => {
    res.send("API de Usuários está funcionando")
})
// Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})