import { SET_REPS, SET_TIME, SET_SETS, SET_EXERCISE } from "../actions/cases";
import base_exercises from "../base_exercises.js";

const initialState = {
	current_exercise: null,
	exercises: base_exercises,
};

export default function pt(state = initialState, action) {
	switch (action.type) {
		case SET_EXERCISE:
			return {
				...state,
				current_exercise: action.payload,
			};
		default:
			return state;
	}
}
