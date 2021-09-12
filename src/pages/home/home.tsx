import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { useHistory } from "react-router-dom";
import './home.scss'
export default function Home() {
    const [inputUser, setInputUser] = useState('');
    const history = useHistory();
    const {createUser}  = useContext(AppContext)


    const inputUserHandler = (event: any ) =>{
        setInputUser(event.target.value)
    }


    const submitHandler = async (event: any) => {
        event.preventDefault();

        console.log(inputUser);
        await createUser(inputUser);
        history.push("/questions");
    }

    return( 
    <div>
        <div className="box">
            <div className="card">
                <form className="size_card" onSubmit={submitHandler}>
                    <h1 className="main_text">Hello</h1>
                        <p className="data_fill_input">Enter user name:</p>
                        <input  className="input_space"
                            type="text"
                            onChange={inputUserHandler}
                            value={inputUser}
                            />
                    <button className="button_class" type="submit">Search!!</button>
                    </form>
            </div>
        </div>
    </div>
    )
};