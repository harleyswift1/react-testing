import './CardArea.css';
import Card from "./Card";

function CardArea(props) {
    return (
        <div className="card-area">
            {(Object.entries(props.cardList) || []).map(([, value]) => {
                return (
                    <Card
                        title={value.title}
                        description={value.description}
                        borderColor={value.color}
                    />
                );
            })}
        </div>
    );
}

export default CardArea;