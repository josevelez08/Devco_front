import { FC, useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import './questions.scss'


export const  Questions: FC = ()=> {
    const {name, questions1, questions2, average,updateQuestions} = useContext(AppContext);
    const [questions, setQuestions] = useState([...questions1]);
    const [q2, setQ2] = useState ([...questions2]);

 

    const submitHandler = async (event: any) => {
        event.preventDefault();

        await updateQuestions(name, questions, q2);
    }

    const handlerQuestions = ( question: any)=> {
     const newQuestions = questions.map((q)=>{
        if(q.number === question.number){
            return {
                ...q, answer: !q.answer 
            }
        }
        return q;
    } );
     setQuestions(newQuestions);
    }
    const handleQuestion2 = ( question: any)=> {
        const newQuestions = q2.map((q)=>{
           if(q.number === question.number){
               return {
                   ...q, answer: !q.answer 
               }
           }
           return q;
       } );
        setQ2(newQuestions);
       }

    const addQuestionHandler  = (e: any)=> {
        e.preventDefault();
        setQ2([...q2, { number: q2.length + 1, answer: false }])
    }

    const removeQuestionHandler= (e: any)=> {
        e.preventDefault();
         q2.pop();
        setQ2([...q2]);

    }

    return (
        <div>
            <div className="main_box_class">
                <p className="name_user">name: {name} average:{average} </p>
            <form>
            <div className="stage_1">
            <h6> Estapa 1</h6>
            {questions.map((q, index) => ( <div key={index}>
                <p>Question { q.number} 
                    <input
                    type="checkbox"
                    onChange={()=> handlerQuestions(q)}
                    checked={q.answer}
                    />
                </p>
            </div>))}
            </div>   
            <div className="stage_2">
                <h6> Estapa 2</h6>
                    <button onClick={addQuestionHandler}>Agregar pregunta</button>
                    <button onClick={removeQuestionHandler}> Remover pregunta</button>
                        {q2.map((q, index) => ( <div key={index}>
                            <p>Question { q.number} 
                                <input
                                type="checkbox"
                                onChange={()=> handleQuestion2(q)}
                                checked={q.answer}
                                />
                            </p>
                            </div>))} 
            </div>
            <button className="button_send" onClick={submitHandler} >Enviar</button>
            </form>
            </div>
        </div>
    )
} 