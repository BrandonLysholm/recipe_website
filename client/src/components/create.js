// Following tutorial: https://www.freecodecamp.org/news/how-to-perform-crud-operations-using-react/

import React, {useState} from 'react';
import {Button, Form } from 'semantic-ui-react';
import axios from "axios";
import myConstants from "../constants";
import {useNavigate} from "react-router-dom";

function Create() {
    const history = useNavigate();
    const [name, setName] = useState("");

    const postData = () => {
        axios.post(myConstants.ingredientCategoryURL,{
            name
        }).then(()=>{
            history(-1);
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
