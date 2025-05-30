const express = require('express');
const router = express.Router();
const Ingredient = require('../private/javascript/Ingredient');
const IngredientCategory = require('../private/javascript/IngredientCategory');
const {sequelize} = require('../dataSource');


router.get('/', async (req,res)=>{
    let allIngredients = await Ingredient.findAll({include: IngredientCategory});
    // let allIngredients = await Ingredient.findAll({include: IngredientCategory});

    res.send(allIngredients);
})

module.exports = router;