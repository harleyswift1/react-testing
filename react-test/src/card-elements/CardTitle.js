import "./CardTitle.css";

function CardTitle(props) {
    return (
        <h1 className="title">{props.text}</h1>
    );
}

export default CardTitle;