import React, { useCallback, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { TextField } from "@mui/material";
import "../style/exercises.css";
import { useNavigate } from "react-router-dom";

export const Exercises = () => {
	const exercises = useSelector((state) => state.pt.exercises);
	// const current_exercise = useSelector((state) => state.pt.current_exercise);
	const navigate = useNavigate();

	const columns = [
		{ field: "name", headerName: "Name" },
		{
			field: "image",
			headerName: "Image",
			// flex: 1.5,
			width: 500,
			renderCell: (params) => {
				return <img src={params.value.default} className="grid-image" />;
			},
		},
		{
			field: "blurb",
			headerName: "Description",
			width: 250,
			renderCell: (params) => <TextField value={params.value} multiline fullWidth />,
		},
		{ field: "sets", headerName: "Sets" },
		{ field: "reps", headerName: "Reps" },
		{ field: "time", headerName: "Time" },
	];

	const rows = exercises.map((item, idx) => ({
		...item,
		id: idx,
	}));

	const handleClick = useCallback((e) => {
		navigate(e.row.uuid);
	});

	// const ExerciseMap = () =>
	// 	exercises.map((item, idx) => (
	// 		<div key={idx}>
	// 			{item.name}
	// 			<br />
	// 			<img src={item.image.default} />
	// 		</div>
	// 	));

	return (
		<div>
			Exercises
			<div>
				<DataGrid rows={rows} columns={columns} rowHeight={300} onCellClick={handleClick} />
			</div>
		</div>
	);
};
