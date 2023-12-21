import './App.css';
import {LeftPanel} from "./layouts/LeftPanel/LeftPanel";
import {Body} from "./layouts/Body/Body";
import {Header} from "./components/Header/Header";
import {CardList} from "./components/CardList/CardList";
import {CardButton} from "./components/Card/CardButton/CardButton";
import {Card} from "./components/Card/Card";
import {CardAddButton} from "./components/CardAddButton/CardAddButton";
import {CardForm} from "./components/CardForm/CardForm";
import {useState} from "react";

const initialData = [
	{
		title: 'Подготовка к обновлению курсов ',
		date: new Date(),
		text: 'Горные походы открывают удивительные природные ландшафт'
	},
	{
		title: 'Поход в горы',
		date: new Date(),
		text: 'Думал что это очень много време...'
	}
];
function App() {
	const [cards,setCards]=useState(initialData);

	const addCard=(card)=>{
		setCards(oldItems => [...oldItems,{
			text:card.text,
			title:card.title,
			date:new Date(card.date)
		}]);
	};
	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<CardAddButton/>
				<CardList>
					{cards.map(item=>(
						<CardButton>
							<Card title={item.title} text={item.text} date={item.date.toDateString()}/>
						</CardButton>
					))}
				</CardList>
			</LeftPanel>
			<Body>
				<CardForm onAddCardHandler={addCard}/>
			</Body>
		</div>
	);
}

export default App;
