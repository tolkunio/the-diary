import s from './CardButton.module.css';
import clsx from "clsx";
export const CardButton = ({children,classname}) => {
	const cl = clsx(s.cardButton,classname);
	return (
		<button className={cl}>
			{children}
		</button>
	);
};
