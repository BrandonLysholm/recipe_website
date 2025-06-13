// Temporary file to get it working with relationshiops
import React, {useEffect, useState} from 'react';
import { Table } from 'semantic-ui-react';
import axios from "axios";
import {myConstants, ingredientModel} from "../constants";

function ReadIngredient() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(myConstants.ingredientURL)
            .then((response) => {
                setApiData(response.data);
                console.log(response.data);
            })

    }, [])
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Category Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.IngredientCategory.name}</Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}

export default ReadIngredient;