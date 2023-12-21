import './App.css';
import {LeftPanel} from "./layouts/LeftPanel/LeftPanel";
import {Body} from "./layouts/Body/Body";
import {Header} from "./components/Header/Header";
import {CardList} from "./components/CardList/CardList";
import {CardAddButton} from "./components/CardAddButton/CardAddButton";
import {CardForm} from "./components/CardForm/CardForm";
import {useState} from "react";

const initialData = [
	{
		id: 1,
		title: 'Подготовка к обновлению курсов ',
		date: new Date(),
		text: 'Горные походы открывают удивительные природные ландшафт'
	},
	{
		id: 2,
		title: 'Поход в горы',
		date: new Date(),
		text: 'Думал что это очень много време...'
	}
];

function App() {
	const [cards, setCards] = useState(initialData);

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
