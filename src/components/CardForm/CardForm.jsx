import s from './CardForm.module.css';
import {Button} from "../Button/Button";
import {useState} from "react";

export const CardForm = ({onAddCardHandler}) => {
	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});


	const addNote = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		{
			console.log(formProps);}
		if (!formProps.title?.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			isFormValid=false;
		}
		if (!formProps.text?.trim().length) {
			setFormValidState(state => ({...state, text: false}));
			isFormValid=false;
		}
		if (!formProps.date?.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			isFormValid=false;
		}
		if (isFormValid==false) {
			return;
		}
		onAddCardHandler(formProps);
	};

	return (
		<form className={s.cardForm} onSubmit={addNote}>
			<input type={"text"} name={'title'} className={`${formValidState.title ? '' : s.invalid}`}/>
			<input type={"date"} name={'date'} className={`${formValidState.date ? '' : s.invalid}`}/>
			<input type={"text"} name={'text'} className={`${formValidState.text ? '' : s.invalid}`}/>
			<textarea name={'post'} id={''} cols={'30'} rows={'10'}></textarea>
			<Button text={'Save'}/>
		</form>
	);
};
