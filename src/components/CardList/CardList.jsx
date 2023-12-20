import s from './CardList.module.css';

export const CardList = ({children}) => {
	return (
		<div className={s.cardList}>
			{children}
		</div>
	);
};
