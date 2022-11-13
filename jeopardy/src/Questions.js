import cats from "./cats.js";
import {useState} from "react";



function Card(props) {
    return (
        <>
            <div className="cardy-questions" onClick={props.handleClick} data-id={props.id}>
                <h5 className="card-points">{props.points}</h5>
            </div>
        </>
    );
}

function QuestionScreen(props) {
    return (
        <div className="question-screen">
            <h5 className="question">{props.question}</h5>
            <ol>
                {props.answers.map((answer) => <li>{answer}</li>)} 
            </ol>
            <button onClick={props.handleClick}>Back</button>
        </div>
    );
}


export default function Questions() {
    const [viewQuestion, setViewQuestion] = useState(false);
    const [data, setData] = useState({question:'', answers:[]})


    function handleQuesClick(event) {
        setViewQuestion(true);
        console.log(event.target.dataset);
    }    
    
    function handleBackClick() {
        setViewQuestion(false);
    }

    const catMap = cats.map((cat) => {
        const cardMap = cat.map((card) => <Card points={card.points} id={card.id} handleClick={handleQuesClick}/>);
        return (
            <div className="ques">
                {cardMap}
            </div>
        );
    })


    return (
    <div className="ques-thingy">
        {catMap}
        {viewQuestion && <QuestionScreen question={data.question} answers={data.answers} handleClick={handleBackClick}/>}
    </div>
    )
}

