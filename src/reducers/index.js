import { combineReducers } from "redux";
import pt from "./pt";

const app_reducer = combineReducers({ pt });
const rootReducer = (state, action) => {
	// if (action.type === 'LOGOUT_SUCCESSFUL') {
	//     Object.keys(state).forEach(key => {
	//         localStorage.removeItem(`persist:${key}`);
	//     });
	//     state = undefined;
	// }
	return app_reducer(state, action);
};

export default rootReducer;
