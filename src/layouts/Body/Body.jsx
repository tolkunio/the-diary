import s from './Body.module.css';
export const Body = ({children}) => {
	return (
		<div className={s.body}>
			{children}
		</div>
	);
};
