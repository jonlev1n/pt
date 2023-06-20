import { SET_TIME, SET_DATE, SET_EXERCISE, SET_REPS, SET_SETS } from "./cases";
import { useNavigate } from "react-router-dom";

export const setExercise = (uuid) => (dispatch, getState) => {
	const exercises = getState().pt.exercises;
	const exercise = exercises.filter((item) => item.uuid === uuid)[0] ?? null;
	dispatch({ type: SET_EXERCISE, payload: exercise?.name });
};

export const nextExercise = () => (dispatch, getState) => {
	const exercises = getState().pt.exercises;
	const current_exercise = getState().pt.current_exercise;
	const current_idx = exercises.findIndex((item) => item.name == current_exercise);
	const num_exercises = exercises.length;
	const next_idx = current_idx === num_exercises - 1 ? 0 : current_idx + 1;
	const next_exercise = exercises[next_idx];
	dispatch({ type: SET_EXERCISE, payload: next_exercise?.name });
	return next_exercise;
};

export const prevExercise = () => (dispatch, getState) => {
	const exercises = getState().pt.exercises;
	const current_exercise = getState().pt.current_exercise;
	const current_idx = exercises.findIndex((item) => item.name == current_exercise);
	const num_exercises = exercises.length;
	const prev_idx = current_idx === 0 ? num_exercises - 1 : current_idx - 1;
	const prev_exercise = exercises[prev_idx];
	dispatch({ type: SET_EXERCISE, payload: prev_exercise?.name });
	return prev_exercise;
};
