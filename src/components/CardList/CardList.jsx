import s from './CardList.module.css';
import {CardButton} from "../Card/CardButton/CardButton.jsx";
import {Card} from "../Card/Card.jsx";

export const CardList = ({cards}) => {
	if(cards.length==0){
		return <p>Записей пока нет, добавьте новую!</p>;
	}
	const sortItems = (a, b) => {
		if (a.date > b.date) {
			return 1;
		} else {
			return -1;
		}
	};
	return (
		<div className={s.cardList}>
			{
				cards.sort(sortItems).map(item => (
					<CardButton key={item.id}>
						<Card title={item.title} text={item.text} date={item.date.toDateString()}/>
					</CardButton>
				))}
		</div>
	);
};
