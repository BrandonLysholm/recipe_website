// Following tutorial: https://www.freecodecamp.org/news/how-to-perform-crud-operations-using-react/

import React, {useState} from 'react';
import {Button, Form } from 'semantic-ui-react';
import axios from "axios";
import myConstants from "../constants";
// import { useHistory } from "react-router-dom";

function Create() {
    // const history = useHistory();
    const [name, setName] = useState("");

    const postData = () => {
        console.log(name)
        axios.post(myConstants.ingredientCategoryURL,{
            name
        })
    }
    return (
        <Form>
            <Form.Field>
                <label>Name:</label>
                <input placeholder="Name" onChange={(e)=> setName(e.target.value)} />
            </Form.Field>
            <Button type="submit" onClick={postData}>Create</Button>
        </Form>
    )
}

export default Create;
