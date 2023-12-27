import './App.css';
import {LeftPanel} from "./layouts/LeftPanel/LeftPanel";
import {Body} from "./layouts/Body/Body";
import {Header} from "./components/Header/Header";
import {CardList} from "./components/CardList/CardList";
import {CardAddButton} from "./components/CardAddButton/CardAddButton";
import {CardForm} from "./components/CardForm/CardForm";
import {useEffect, useState} from "react";

function App() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		const data=JSON.parse(localStorage.getItem('data'));
		if(data){
			setCards(data.map(item=>({
				...item,
				date:new Date(item.date)
			})));
		}
	}, []);

	const addCard = (card) => {
		setCards(oldItems => [...oldItems, {
			id: Math.max(...oldItems.map(item => item.id)) + 1,
			text: card.text,
			title: card.title,
			date: new Date(card.date)
		}]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<CardAddButton/>
				<CardList cards={cards}/>
			</LeftPanel>
			<Body>
				<CardForm onAddCardHandler={addCard}/>
			</Body>
		</div>
	);
}

export default App;
