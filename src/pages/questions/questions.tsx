import { FC, useContext, useState } from "react";
import { AppContext } from "../../context/appContext";


export const  Questions: FC = ()=> {
    const {name, questions1, questions2, updateQuestions} = useContext(AppContext);
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

    const addQuestionHandler  = ()=> {
        setQ2([...q2, { number: q2.length + 1, answer: false }])
    }

    const removeQuestionHandler= ()=> {
         q2.pop();
        setQ2([...q2]);

    }

    return (
        <div>
            <div>name:{name}</div>
            <form onSubmit={submitHandler}>

            {questions.map((q, index) => ( <div key={index}>
                <p>Question { q.number} 
                    <input
                    type="checkbox"
                    onChange={()=> handlerQuestions(q)}
                    checked={q.answer}
                    />
                </p>
            </div>))}   
            <h6> Estapa 2</h6>
            <div>
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
            <button type="submit">Enviar!!</button>
            </form>
        </div>
    )
} 