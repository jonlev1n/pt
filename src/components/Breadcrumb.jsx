import React, { useCallback, useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

export const Breadcrumb = () => {
	const current_exercise = useSelector((state) => state.pt.current_exercise);

	return (
		<div>
			<Link to="/exercises">Exercises</Link> &gt; <b>{current_exercise}</b>
		</div>
	);
};
