export const INIT_STATE = {
	isValid: {
		title: true,
		tag: true,
		date: true,
		post:true
	},
	values: {
		title: '',
		tag: '',
		date: '',
		post:''
	},
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch (action.type) {
		case 'SET_VALUE':
			return {...state, values: {...state.values,...action.payload}};
		case 'CLEAR_FORM':
			return {...state,isValid: INIT_STATE.values};
		case 'RESET_VALIDITY':
			return{...state,isValid: INIT_STATE.isValid};
		case 'SUBMIT_FORM': {
			const tagValidity=state.values.tag?.trim().length;
			const titleValidity=state.values.title?.trim().length;
			const postValidity=state.values.post?.trim().length;
			const dateValidity=state.values.date;
			return {
				...state,
				isValid: {
					text: tagValidity,
					title: titleValidity,
					date: dateValidity,
					post: postValidity
				},
				isFormReadyToSubmit: tagValidity && titleValidity && dateValidity && postValidity
			};
		}
	}
}