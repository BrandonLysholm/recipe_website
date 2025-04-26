const express = require('express');
const router = express.Router();
const IngredientCategory = require('../private/javascript/IngredientCategory');
const {sequelize} = require('../dataSource');

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#client_error_responses

router.get('/', async (req,res)=>{
    let allIngredientCategories = await IngredientCategory.findAll();

    for (let ingredientCat of allIngredientCategories){
        console.log('Ingredient Category:\n');
        console.log(ingredientCat.dataValues);
        console.log('\n\n');
    }

    res.send(allIngredientCategories);
})

router.post('/', async (req,res)=>{
    let status = 200;

    if (req.body !== undefined && req.body.name !== undefined){
        let newName = req.body.name;
        const response = await IngredientCategory.create({name: newName});
        console.log(response);
    } else {
        status = 400;
    }
    res.status(status);
    res.send();

})

router.delete('/', async (req,res)=>{
    let status = 200;
    if (req.body !== undefined && req.body.id !== undefined) {
        let categoryID = req.body.id;
        if (await IngredientCategory.findByPk(categoryID)){
            await IngredientCategory.destroy({where:{id:categoryID}});
            status = 200;
        } else {
            status = 404;
        }
    } else {
        status = 400;
    }

    res.status(status)
    res.send()

})

module.exports = router;
