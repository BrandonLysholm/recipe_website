import React, {useEffect, useState} from 'react';
import {Button, Form } from 'semantic-ui-react';
import axios from "axios";
import myConstants from "../constants";

function Update() {
    const [name, setName] = useState("");
    const [id, setID] = useState(null)

    const updateAPIData = () => {
        axios.put(myConstants.ingredientCategoryURL, {
            id: id,
            name: name,
        })
    }

    useEffect(() => {
        setID(localStorage.getItem("id"));
        // console.log(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        // console.log(localStorage.getItem("name"));
    }, [])

    return (
        <Form>
            <Form.Field>
                <label>Name:</label>
                <input placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
            </Form.Field>
            <Button type="submit" onClick={updateAPIData}>Update</Button>
        </Form>
    )
}

export default Update;
