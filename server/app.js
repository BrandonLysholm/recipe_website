const express = require('express');
const app = express();
const cors = require('cors');

const ingredientCategoryRouter = require('./routes/ingredientCategoryRouter');


app.use(cors());

app.listen(8080, ()=>{
    console.log('Server running on port 8080');
})

app.get('/',(req,res)=>{
    res.send('Welcome to the server!');
})

app.use('/ingredientCategory',ingredientCategoryRouter);
