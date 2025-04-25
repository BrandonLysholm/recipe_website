import React from "react";
import CategoryTable from "../components/categoryTable.tsx";
import fetch from "sync-fetch";

function getData() {
    return fetch("http://localhost:8080/ingredientCategory").json();
}

const IngredientCategories = () => {
    let apiResponse = getData();
    return (
        <div>
            <h1>
                Page for Ingredient Categories
            </h1>
            {CategoryTable(apiResponse)}
        </div>
    );
};

export default IngredientCategories;
