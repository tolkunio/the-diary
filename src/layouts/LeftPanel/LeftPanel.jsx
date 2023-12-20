import s from './LeftPanel.module.css';
export const LeftPanel = ({children}) => {
	return (
		<div className={s.leftPanel}>
			{children}
		</div>
	);
};