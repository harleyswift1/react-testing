import './Card.css';

import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardButton from "./CardButton";

function Card(props) {
    return (
        <div className="card" style={{borderLeft: "8px solid " + props.borderColor}}>
            <CardTitle text={props.title}/>
            <CardDescription text={props.description}/>
            <CardButton />
        </div>
    );
}

export default Card;