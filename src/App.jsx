import './App.css';
import {LeftPanel} from "./layouts/LeftPanel/LeftPanel";
import {Body} from "./layouts/Body/Body";
import {Header} from "./components/Header/Header";
import {CardList} from "./components/CardList/CardList";
import {CardButton} from "./components/Card/CardButton/CardButton";
import {Card} from "./components/Card/Card";
import {CardAddButton} from "./components/CardAddButton/CardAddButton";

function App() {
	const data = [
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
	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<CardAddButton/>
				<CardList>
					<CardButton>
						<Card title={data[0].title} date={data[0].date.toDateString()} text={data[0].text}/>
						<Card title={data[1].title} date={data[1].date.toDateString()} text={data[1].text}/>
					</CardButton>
				</CardList>
			</LeftPanel>
			<Body>
				Body
			</Body>
		</div>
	);
}

export default App;
