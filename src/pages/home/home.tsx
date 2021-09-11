import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { useHistory } from "react-router-dom";
export default function Home() {
    const [inputUser, setInputUser] = useState('');
    const history = useHistory();
    const {createUser,}  = useContext(AppContext)


    const inputUserHandler = (event: any ) =>{
        setInputUser(event.target.value)
    }


    const submitHandler = async (event: any) => {
        event.preventDefault();

        await createUser(inputUser);
        history.push("/questions");
    }

    return <div>
    <form onSubmit={submitHandler}>
            <h1>Hello</h1>
                <p>Enter user name:</p>
                    <input 
                        type="text"
                        onChange={inputUserHandler}
                        value={inputUser}
                    />
            <button type="submit">Search!!</button>
            </form>
    </div>
};