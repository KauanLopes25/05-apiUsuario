'use strict'

/********************************************************************************************
* Objetivo: Arquivo responsavel pelo controle das requisições executadas pelo front
* Autor: Kauan Lopes Pereira
* Data: 27/08/2025
* Versão: 1.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************


********************************************************************************************/

// Importação das funções presentes no userModel
const userModel = require('../model/userModel')

// Controlador para listar todos os usuarios
const getAllUsers = (req, res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

module.exports = {
    getAllUsers
}