import { combineReducers } from "redux";

const userReducer = (state={},actions) => {
	switch(action.type){
		case "CHANGE_NAME":{
			state = {...state, name: action.payload};
			break;
		}
		case "CHANGE_AGE": {
			state = {...state, age: action.payload};
			break;
		}
	}
	return state;
}
const reducer = combineReducers({
	user: userReducer
})


export reducer;