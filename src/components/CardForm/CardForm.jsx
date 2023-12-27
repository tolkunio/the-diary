import s from './CardForm.module.css';
import {Button} from "../Button/Button";
import {useState} from "react";
import cn from 'classnames';

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
			console.log(formProps);
		}
		if (!formProps.title?.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		}
		if (!formProps.text?.trim().length) {
			setFormValidState(state => ({...state, text: false}));
			isFormValid = false;
		}
		if (!formProps.date?.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		}
		if (isFormValid == false) {
			return;
		}
		onAddCardHandler(formProps);
	};

	return (
		<form className={s.cardForm} onSubmit={addNote}>
			<div>
				<input type={"text"} name={'title'} className={cn(s.invalid, s.inputTitle)}/>
			</div>
			<div className={s.formRow}>
				<label className={s.formLabel} htmlFor={'date'}>
					<img src={'/calendar.svg'} alt={'calendar'}/>
					<span>Дата</span>
				</label>
				<input id='date' type={"date"} name={'date'} className={cn(s.input,`${formValidState.date ? '' : s.invalid}`)}/>
			</div>
			<div className={s.formRow}>
				<label className={s.formLabel} htmlFor={'text'}>
					<img src={'/folder.svg'} alt={'folder'}/>
					<span>Метки</span>
				</label>
				<input type={"text"} name={'text'} id={'text'} className={`${s.input}${formValidState.text ? '' : s.invalid}`}/>
			</div>

			<textarea name={'post'} id={''} cols={'30'} rows={'10'}></textarea>
			<Button text={'Save'}/>
		</form>
	);
};
