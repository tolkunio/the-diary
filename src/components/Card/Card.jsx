import s from './Card.module.css';

export const Card = ({title,tag,date,post}) => {
	return (
		<>
			<h2 className={s.cardHeader}>{title}</h2>
			<div className={s.cardBody}>
				<span className={s.cardBodyDate}> {date}</span>
				<span className={s.cardBodyTag}> {tag}</span>
				<span> {post}</span>
			</div>
		</>
	);
};