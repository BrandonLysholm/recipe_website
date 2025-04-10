const express = require('express');
const router = express.Router();
const IngredientCategory = require('../private/javascript/IngredientCategory');
const {sequelize} = require('../dataSource');

router.get('/', async (req,res)=>{
    let allIngredientCategories = await IngredientCategory.findAll();

    for (let ingredientCat of allIngredientCategories){
        console.log('Ingredient Category:\n');
        console.log(ingredientCat.dataValues);
        console.log('\n\n');
    }

    res.send(allIngredientCategories);

})

module.exports = router;
