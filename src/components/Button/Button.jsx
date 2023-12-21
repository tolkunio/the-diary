import s from './Button.module.css';
export const Button = ({text, onClick}) => {
	return (
		<button className={s.button} type={'submit'} onClick={onClick}>{text}</button>
	);
};