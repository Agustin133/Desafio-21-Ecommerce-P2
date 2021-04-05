const { response } = require("express");
const moment  = require('moment');
const {options} = require('../infrastructure/services/mariaDB');
const knex = require('knex')(options);


async function getProductById(id) {
    const response = await knex.from('cart').select('*').where('id',id);
    return response[0];
    }

async function getAll() {
    const response = await knex.from('cart').select('*');
    return response;
}

async function addProduct(body) {
    let timestamp = moment().format('lll');
    const { title, price, thumbnail, code, stock, description } = body;
    const item = {
        title,
        price,
        stock,
        code,
        thumbnail,
        timestamp,
        description
    }
    try {
        await knex('cart').insert(item);
        return 'product added successfully';
    } catch (error) {
        return error;
    }
}

async function deleteProduct(id) {
    try{
        await knex('cart').where('id',id).del();
        return 'Product deleted successfully';
    }catch(err){
        return err;
    }
}


module.exports = {
    getProductById,
    getAll,
    addProduct,
    deleteProduct
}