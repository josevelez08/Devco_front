import { FC, useContext, useState } from "react";
import { AppContext,  } from "../../context/appContext";


export const  Questions: FC = ()=> {
    const {updateQuestions}  = useContext(AppContext)
    const [checkQuestion1, setCheckQuestion1] = useState(false);
    const [checkQuestion2, setCheckQuestion2] = useState(false);
    const [checkQuestion3, setCheckQuestion3] = useState(false);
    const [checkQuestion4, setCheckQuestion4] = useState(false);
    const [checkQuestion5, setCheckQuestion5] = useState(false);
    const [checkQuestion6, setCheckQuestion6] = useState(false);
    const [checkQuestion7, setCheckQuestion7] = useState(false);
    const [checkQuestion8, setCheckQuestion8] = useState(false);
    const {name, questions1, questions2,_id} = useContext(AppContext);


    const checkQuestionHandler1 = () =>{
        setCheckQuestion1(!checkQuestion1);
    }
    const checkQuestionHandler2 = () =>{
        setCheckQuestion2(!checkQuestion2);
    }
    const checkQuestionHandler3 = () =>{
        setCheckQuestion3(!checkQuestion3);
    }
    const checkQuestionHandler4 = () =>{
        setCheckQuestion4(!checkQuestion4);
    }
    const checkQuestionHandler5 = () =>{
        setCheckQuestion5(!checkQuestion5);
    }
    const checkQuestionHandler6 = () =>{
        setCheckQuestion6(!checkQuestion6);
    }
    const checkQuestionHandler7 = () =>{
        setCheckQuestion7(!checkQuestion7);
    }
    const checkQuestionHandler8 = () =>{
        setCheckQuestion8(!checkQuestion8);
    }

    const submitHandler = async (event: any) => {
        event.preventDefault();


        await updateQuestions(name, _id, questions1, questions2);
    }



    return (
        <div>
            <div>
                <p>Question 1 
                    <input
                    type="checkbox"
                    onChange={checkQuestionHandler1}
                    checked={checkQuestion1}
                    />
                </p>
            </div>
            <div>
                <p>Question 2
                    <input
                    type="checkbox"
                    onChange={checkQuestionHandler2}
                    checked={checkQuestion2}
                    />
                </p>
            </div>
            <div>
                <p>Question 3
                    <input
                    type="checkbox"
                    onChange={checkQuestionHandler3}
                    checked={checkQuestion3}
                    />
                </p>
            </div>
            <div>
                <p>Question 4
                <input
                type="checkbox"
                onChange={checkQuestionHandler4}
                checked={checkQuestion4}
                />
                </p>
            </div>
            <div>
                <p>Question 5
                    <input
                    type="checkbox"
                    onChange={checkQuestionHandler5}
                    checked={checkQuestion5}
                    />
                </p>
            </div>
                <div>
                <p>Question 6
                    <input
                    type="checkbox"
                    onChange={checkQuestionHandler6}
                    checked={checkQuestion6}
                    />
                </p>
                </div>
            <div>
                <p>Question 7
                    <input
                    type="checkbox"
                    onChange={checkQuestionHandler7}
                    checked={checkQuestion7}
                    />
                </p>
                </div>
            <div>
                <p>Question 8
                    <input
                    type="checkbox"
                    onChange={checkQuestionHandler8}
                    checked={checkQuestion8}
                    />
                </p>
            </div>
        </div>
    )
} 