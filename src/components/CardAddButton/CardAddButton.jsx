import s from './CardAddButton.module.css';
import {CardButton} from "../Card/CardButton/CardButton.jsx";
export const CardAddButton = () => {
	return (
		<div>
			<CardButton classname={s.cardAdd}> Новое воспоминание</CardButton>
		</div>
	);
};
