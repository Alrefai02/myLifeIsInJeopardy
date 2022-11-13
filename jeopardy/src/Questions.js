function Card(props) {
    return (
        <div className="cardy-questions">
            <h5 className="card-points">{props.points}</h5>
        </div>
    );
}

let cat1 = [
    {points: "100", question: "What is the capital of France?", answer: "Paris"},
    {points: "200", question: "What is the capital of Germany?", answer: "Berlin"},
    {points: "300", question: "What is the capital of Italy?", answer: "Rome"},
    {points: "400", question: "What is the capital of Spain?", answer: "Madrid"},
    {points: "500", question: "What is the capital of the United Kingdom?", answer: "London"}
]
let cat2 = [
    {points: "100", question: "What is the capital of France?", answer: "Paris"},
    {points: "200", question: "What is the capital of Germany?", answer: "Berlin"},
    {points: "300", question: "What is the capital of Italy?", answer: "Rome"},
    {points: "400", question: "What is the capital of Spain?", answer: "Madrid"},
    {points: "500", question: "What is the capital of the United Kingdom?", answer: "London"}
]
let cat3 = [
    {points: "100", question: "What is the capital of France?", answer: "Paris"},
    {points: "200", question: "What is the capital of Germany?", answer: "Berlin"},
    {points: "300", question: "What is the capital of Italy?", answer: "Rome"},
    {points: "400", question: "What is the capital of Spain?", answer: "Madrid"},
    {points: "500", question: "What is the capital of the United Kingdom?", answer: "London"}
]

let cats = [cat1, cat2, cat3];

const catMap = cats.map((cat) => {
    const cardMap = cat.map((card) => <Card points={card.points} />);
    return (
        <div className="ques">
            {cardMap}
        </div>
    );
})

export default function Questions() {
    return (
    <div className="ques-thingy">
        {catMap}
    </div>
    )
}