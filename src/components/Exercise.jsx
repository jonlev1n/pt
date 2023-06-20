import React, { useCallback, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { pt } from "../actions";
import { Button, IconButton, Paper } from "@mui/material";
import { ArrowDropDown, ArrowDropUp, ArrowRight, ArrowLeft } from "@mui/icons-material";
import { Breadcrumb } from "./Breadcrumb";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useLongPress } from "use-long-press";

export const Exercise = () => {
	const params = useParams();
	const uuid = params.uuid;
	const dispatch = useDispatch();
	const exercises = useSelector((state) => state.pt.exercises);
	const current_exercise_name = useSelector((state) => state.pt.current_exercise);
	const current_exercise =
		exercises.filter((item) => item.name === current_exercise_name)[0] ?? {};
	const navigate = useNavigate();
	const [reps, setReps] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [size, setSize] = useState(null);
	const [key, setKey] = useState(null);
	const sizeRef = useRef();

	const holdArrowDown = useLongPress(() => {
		resetReps();
	});

	const holdTimer = useLongPress(() => {
		resetTime();
	});

	const resetTime = () => {
		stopTime();
		updateKey();
	};

	const resetReps = useCallback((e) => {
		setReps(0);
	});

	const handleNext = useCallback(() => {
		resetReps();
		// reset time if exercise changes
		stopTime();
		updateKey();
		const next = dispatch(pt.nextExercise());
		navigate(`/exercises/${next.uuid}`);
	});

	const handlePrevious = useCallback(() => {
		resetReps();
		// reset time if exercise changes
		stopTime();
		updateKey();
		const prev = dispatch(pt.prevExercise());
		navigate(`/exercises/${prev.uuid}`);
	});

	const increaseReps = useCallback(() => {
		const nextReps = reps + 1;
		setReps(nextReps);
	});

	const decreaseReps = useCallback(() => {
		const nextReps = reps > 0 ? reps - 1 : 0;
		setReps(nextReps);
	});

	const handleTime = useCallback(() => {
		const playing = !isPlaying;
		setIsPlaying(playing);
	});

	const stopTime = useCallback(() => {
		setIsPlaying(false);
	});

	const handleComplete = useCallback(() => {
		stopTime();
		increaseReps();
		updateKey();
	});

	const updateKey = useCallback(() => {
		const key = Math.random();
		setKey(key);
	});

	const isTimed = current_exercise?.time !== null;
	const col_class = isTimed ? "col-6" : "col-12";

	useEffect(() => {
		// set the exercise
		dispatch(pt.setExercise(uuid));
		// set size
		const size = sizeRef?.current?.clientHeight;
		console.log(size);
		console.log(sizeRef);
		setSize(size);
	}, [Exercise]);

	console.log(size);
	console.log(sizeRef);

	return (
		<div>
			<div className="body p-4 vh-100">
				<div className="navbar">
					<Breadcrumb />
				</div>
				<div className="vh-50 m-4 d-flex justify-content-center">
					<div className="row w-100">
						<div className="col-6 d-flex align-items-center justify-content-center">
							<Paper key={current_exercise?.uuid}>
								<img
									key={current_exercise?.uuid}
									src={current_exercise?.image?.default}
									className="img-fluid pt-img"
								/>
							</Paper>
						</div>
						<div className="col-6 d-flex">
							<div className="d-flex m-4 flex-column justify-content-center align-items-center">
								<h3>Instructions:</h3>
								<div>
									<h6>{current_exercise?.blurb}</h6>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="d-flex">
					<div className="row w-100">
						<div className={col_class}>
							<div className="d-flex justify-content-center flex-column align-items-center">
								<h2>Reps</h2>
								<div className="d-flex justify-content-center align-items-center">
									<div className="m-2" ref={sizeRef}>
										<span className="count-text">
											{reps}/
											<h2 className="d-inline">{current_exercise?.reps}</h2>
										</span>
									</div>
									<div className="m-2">
										<div className="my-3">
											<div className="d-flex flex-column">
												<IconButton
													className={"arrow-icon"}
													tooltip={"Increase Reps"}
													onClick={increaseReps}>
													<ArrowDropUp />
												</IconButton>
											</div>
											<div className="my-3">
												<IconButton
													className={"arrow-icon"}
													tooltip={"Decrease Reps"}
													onClick={decreaseReps}
													{...holdArrowDown()}>
													<ArrowDropDown />
												</IconButton>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{isTimed && (
							<div className="col-6">
								<div className="d-flex justify-content-center flex-column align-items-center">
									<h2>Time</h2>
									<div onClick={handleTime} {...holdTimer()}>
										<h2>
											<CountdownCircleTimer
												key={key}
												isPlaying={isPlaying}
												duration={current_exercise?.time}
												size={size}
												colors={[
													"#004777",
													"#F7B801",
													"#A30000",
													"#A30000",
												]}
												onComplete={handleComplete}
												colorsTime={[current_exercise?.time, 5, 2, 0]}>
												{({ remainingTime }) => remainingTime}
											</CountdownCircleTimer>
										</h2>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="footer fixed-bottom m-4">
				<div className="row">
					<div className="col-6 d-flex px-4">
						<IconButton
							className={"arrow-icon"}
							tooltip={"Next Exercise"}
							onClick={handlePrevious}>
							<ArrowLeft />
						</IconButton>
					</div>
					<div className="col-6 d-flex flex-row-reverse px-4">
						<IconButton
							className={"arrow-icon"}
							tooltip={"Previous Exercise"}
							onClick={handleNext}>
							<ArrowRight />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
};
