import React from "react";
// import CategoryTable from "../components/categoryTable.tsx";
import fetch from "sync-fetch";
import Create from "../components/create"
import Read from "../components/read"
import Update from "../components/update"
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

function getData() {
    return fetch("http://localhost:8080/ingredientCategory").json();
}

const IngredientCategories = () => {
    // let apiResponse = getData();
    return (
        <div>
            <h1>
                Page for Ingredient Categories
            </h1>
            {/*{CategoryTable(apiResponse)}*/}
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
