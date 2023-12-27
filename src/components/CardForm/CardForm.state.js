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
		case 'CLEAR_FORM':
			return {...state,isValid: INIT_STATE.values};
		case 'RESET_VALIDITY':
			return{...state,isValid: INIT_STATE.isValid};
		case 'SUBMIT_FORM': {
			const tagValidity=action.payload.tag?.trim().length;
			const titleValidity=action.payload.title?.trim().length;
			const postValidity=action.payload.post?.trim().length;
			const dateValidity=action.payload.date;
			return {
				...state,values:action.payload,
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