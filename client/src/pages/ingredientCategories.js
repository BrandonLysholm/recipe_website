import React from "react";
import CategoryTable from "../components/categoryTable.tsx";
import axios from "axios";

function getData() {
    let res;
    axios.get("http://localhost:8080/ingredientCategory").then((response)=>{
        console.log('got response from server')
        res = response.data;
    })
    return res;
}

const IngredientCategories = () => {
    // let apiResponse = getData();


    // console.log("response is " + apiResponse)
    let apiResponse = [
        {
            id: 1,
            name: 'dummy data'
        },
        {
            id: 22,
            name: 'second dummy'
        }
    ]

    return (
        <div>
            <h1>
                Page for Ingredient Categories
                {CategoryTable(apiResponse)}
            </h1>
        </div>
    );
};

export default IngredientCategories;
