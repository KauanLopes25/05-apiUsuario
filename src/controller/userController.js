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
const { use } = require('../routes/userRoutes')

// Controlador para listar todos os usuarios
const getAllUsers = (req, res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

// Método do controlador para obter um usuário por ID
const getUserById = (req, res) => {

    // Pegando o id que foi enviado na requisicao
    const id = parseInt(req.params.id)

    // Chamando o metodo findById do userModel
    const user = userModel.findById(id)

    if(user){
        // Responder com status code de 200 (Sucesso!)
        //e devolver os dados do usuario em forma json
        res.status(200).json(user)
    } else{
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!'})
    }
}

// Método do controlador para criar um novo usuário
const createUser = (req, res) =>{
    // Pegando os dados que foram enviados pelo Body (Corpo da Requisição)
    const {name, email} = req.body

    // Validar se foram enviados
    if(!name || !email){
        return res.status(400).json({mensagem: 'Nome e email são obrigatórios'})
    } else{
        const newUser = userModel.create({name,email})
        res.status(201).json(newUser)
    }

}
module.exports = {
    getAllUsers,
    getUserById,
    createUser
}