import React from "react";
import Read from "../components/read"
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';


const IngredientCategories = () => {
    return (
        <div>
            <h1>
                Page for Ingredient Categories
            </h1>
            <h3>Create:</h3>
            <Link to="./create">
                <Button>Add New</Button>

            </Link>

            <h3>Read:</h3>
            <Read/>
        </div>
    );
};

export default IngredientCategories;
