import s from './CardForm.module.css';
import {Button} from "../Button/Button";
import {useEffect, useReducer} from "react";
import cn from 'classnames';
import {formReducer, INIT_STATE} from "./CardForm.state.js";

export const CardForm = ({onAddCardHandler}) => {
	const [formState, dispatchForm] = useReducer(formReducer, INIT_STATE);
	const {isValid, isFormReadyToSubmit, values} = formState;
	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.text || !isValid.title || !isValid.post) {
			timerId = setTimeout(() => {
				dispatchForm({type: 'RESET_VALIDITY'});
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		console.log(isFormReadyToSubmit);
		if (isFormReadyToSubmit) {
			onAddCardHandler(values);
			dispatchForm({type: 'CLEAR_FORM'});
		}
	}, [isFormReadyToSubmit]);


	const addNote = (event) => {
		event.preventDefault();
		console.log(event.target);
		const formData = new FormData(event.currentTarget);
		console.log(formData);
		const formProps = Object.fromEntries(formData);
		dispatchForm({type: 'SUBMIT_FORM', payload: formProps});

	};
	const onChange =(e)=>{
		dispatchForm({type:'SET_VALUE',payload:{[e.target.name]:e.target.value}});
	};

	return (
		<form className={s.cardForm} onSubmit={addNote}>
			<div>
				<input type={"text"} name={'title'} onChange={onChange} value={values.title} id={'title'} className={cn(s.invalid, s.inputTitle)}/>
			</div>
			<div className={s.formRow}>
				<label className={s.formLabel} htmlFor={'date'}>
					<img src={'/calendar.svg'} alt={'calendar'}/>
					<span>Дата</span>
				</label>
				<input id='date' type={"date"} onChange={onChange} name={'date'} value={values.date}
					className={cn(s.input, `${isValid.date ? '' : s.invalid}`)}/>
			</div>
			<div className={s.formRow}>
				<label className={s.formLabel} htmlFor={'tag'}>
					<img src={'/folder.svg'} alt={'folder'}/>
					<span>Метки</span>
				</label>
				<input type={"text"} name={'tag'} onChange={onChange} id={'tag'} value={values.tag}
					className={`${s.input}${isValid.tag ? '' : s.invalid}`}/>
			</div>

			<textarea name={'post'} id={'post'} onChange={onChange} value={values.post} cols={'30'} rows={'10'} className={`${isValid.post ? '' : s.invalid}`}></textarea>
			<Button text={'Save'}/>
		</form>
	);
};
