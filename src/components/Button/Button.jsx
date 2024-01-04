import s from './Button.module.css';
import cn from "classnames";
export const Button = ({text, onClick,disabled=true}) => {
	return (
		<button className={cn(s.button,`${disabled ? '' : s.disabled}`)} type={'submit'} onClick={onClick}>
			{text}
		</button>
	);
};