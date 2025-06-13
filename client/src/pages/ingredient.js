import React from "react";
import Read from "../components/read"
import {useNavigate} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import {myConstants} from "../constants";
import ReadIngredient from "../components/readIngredient";

const Ingredient = () => {
    return (
        <div>
            <h1>
                Page for Ingredients
            </h1>
            <h3>Read:</h3>
            <ReadIngredient />

        </div>
    )
}

export default Ingredient;