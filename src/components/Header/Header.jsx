import s from './Header.module.css';
export const Header = () => {
	return (
		<div className={s.header}>
			<img className={s.logo} src={'/logo.svg'} alt='logo'/>
		</div>
	);
};
