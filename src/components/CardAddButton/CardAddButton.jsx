import s from './CardAddButton.module.css';
import {CardButton} from "../Card/CardButton/CardButton.jsx";
export const CardAddButton = () => {
	return (
		<div>
			<CardButton classname={s.cardAdd}>
				<img  className={s.plus} src={'/plus.svg'} alt={'plus'}/>
				Новое воспоминание
			</CardButton>
		</div>
	);
};
