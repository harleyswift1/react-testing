import './App.css';
import {Component} from "react";
import CardArea from "./card-elements/CardArea";
import Card from "./card-elements/Card";
import json from "./data.json"

const list = [];
for (const key in json) {
    if (json.hasOwnProperty(key)) {
        list.push(key);
    }
}

class App extends Component {
    state = {
        cardData: list,
        activeCardData: null
    }

    udpateActiveCard(cardID){
        const foundCard = this.state.cardData.find(card => card.id === cardID)
        if(!foundCard)
            return;

        this.setState({...this.state, activeCardData: {...foundCard}});
    }

            render() {
            return <div className="content">
                <div className="selected-card-area">
                    { this.state.activeCardData ? <Card cardData={this.state.activeCardData} /> : null }
                </div>
                <CardArea cardList={list} cardData={this.state.cardData} updateActiveCard={this.updateActiveCard} />
            </div>;
        }
    }

export default App;