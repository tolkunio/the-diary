import s from './Card.module.css';

export const Card = ({title,text,date}) => {
	return (
		<>
			<h2 className={s.cardHeader}>{title}</h2>
			<div className={s.cardBody}>
				<span className={s.cardBodyDate}> {date}</span>
				<span className={s.cardBodyText}> {text}</span>
			</div>
		</>
	);
};