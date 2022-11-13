import './styles.css';

function Card(props) {
    return (
        <div className="cardy">
            <h5 className="card-title">{props.title}</h5>
        </div>
    );
}

let cards = [
    {title: "Card 1"},
    {title: "Card 2"},
    {title: "Card 3"}
]

const cardMap = cards.map((card) => <Card title={card.title} />);
console.log(cardMap);
export default function Header() {
    return (
        <div className="header">
            {cardMap}
        </div>
    )
}