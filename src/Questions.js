import cats from "./cats.js";
import {useState ,useRef} from "react";


function Card(props) {   
    let initStyle = "cardy-questions";
    let clickedStyle = "cardy-questions-clicked";

    const timesClicked = useRef(0)

    if (timesClicked.current !== 0 || props.id-props.data.id === 0) {
        initStyle = clickedStyle;
    }

    const nestedHandleClick = (e) => {
        timesClicked.current++;
        props.handleClick(e)
    }
    

    return (
        <div>
            <div id={props.id} className= {initStyle}  onClick={e => {return nestedHandleClick(e)}}>
                <h5 className="card-points">{props.points}</h5>
            </div>
        </div>
    );
}

function QuestionScreen(props) {
    return (
        <div className="question-screen">
            <h5 className="question">{props.question}</h5>
            {props.id -2 === 0 && <img src="../q2.png" alt="" className="question-img"/>}
            <ol className="answers">
                {props.answers.map((answer) => <li type="a">{answer}</li>)} 
            </ol>
            <button className="back-button" onClick={props.handleClick}>Back</button>
        </div>
    );
}


export default function Questions() {
    const [data, setData] = useState({question: null, answers: null ,id: null})
    const allData = []
    cats.map((cat) => cat.map((card) => allData.push(card)));

    function handleQuesClick(event) {
        const id = event.currentTarget.id;
        const question = allData[id-1].question;
        const answers = allData[id-1].answers;
        setData({question: question, answers: answers ,id: id});
    }    
    
    function handleBackClick() {
        setData({question: null, answers: null ,id: null})
    }

    const catMap = cats.map((cat) => {
        const cardMap = cat.map((card) => <Card points={card.points} id={card.id} handleClick={handleQuesClick} data={data}/>);
        return (
            <div className="ques">
                {cardMap}
            </div>
        );
    })


    return (
    <div className="questions">
        <div className="ques-thingy">
            {catMap}
        </div>
        {data.id && <QuestionScreen question={data.question} answers={data.answers} handleClick={handleBackClick} id={data.id}/>}
    </div>
    )
}

