const initialState = {
	user : []
}

const UserData = (state = initialState, {type, payload}) => {
	switch(type){
		case "SETUSER":
			return {...state, user : payload};
		default:
			return state;
	}
}

export default UserData;