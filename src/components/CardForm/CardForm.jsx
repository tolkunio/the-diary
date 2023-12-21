import s from './CardForm.module.css';
import {Button} from "../Button/Button";

export const CardForm = ({onAddCardHandler}) => {

	const addNote = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		onAddCardHandler(formProps);
	};

	return (
		<form className={s.cardForm} onSubmit={addNote}>
			<input type={"text"} name={'title'}/>
			<input type={"date"} name={'date'}/>
			<input type={"text"}  name={'text'}/>
			<textarea name={'post'} id={''} cols={'30'} rows={'10'}></textarea>
			<Button text={'Save'} onClick={()=>{console.log('pressed');}}/>
		</form>
	);
};
