import * as pendulum from "./assets/pendulum.jpeg";
import * as shoulder_abduction_iso from "./assets/shoulder_abduction_isometric.jpeg";
import * as shoulder_abduction from "./assets/shoulder_abduction.jpeg";
import * as shoulder_adduction from "./assets/shoulder_adduction.jpeg";
import * as shoulder_elevation_active from "./assets/shoulder_elevation_active.jpeg";
import * as shoulder_elevation from "./assets/shoulder_elevation.jpeg";
import * as shoulder_extension from "./assets/shoulder_extension.jpeg";
import * as shoulder_external_rotation_strength from "./assets/shoulder_external_rotation_strength.jpeg";
import * as shoulder_external_rotation from "./assets/shoulder_external_rotation.jpeg";
import * as shoulder_internal_rotation_assisted from "./assets/shoulder_internal_rotation_assisted.jpeg";
import * as shoulder_internal_rotation_strength from "./assets/shoulder_internal_rotation_strength.jpeg";
import * as shoulder_internal_rotation from "./assets/shoulder_internal_rotation.jpeg";
import * as shoulder_rotation from "./assets/shoulder_rotation.jpeg";
import * as walk_up from "./assets/walk_up.jpeg";

const base_exercises = [
	{
		uuid: "8df6b31a-2221-42ed-af46-7bac70bc3486",
		name: "Pendulum",
		sets: 3,
		reps: 10,
		time: null,
		blurb: "Rock your body in a circular pattern to move your arm clockwise 10 times, then counterclockwise 10 times. Keep your arm relaxed during the exercise. The circle your hand is making should be about 1 to 2 feet wide. The circular pendular movement should occur through your shoulder joint.",
		image: pendulum,
	},
	{
		uuid: "e9175bef-46d9-44fe-afc9-578642b9fe09",
		name: "Shoulder Forward Elevation (Assisted)",
		sets: 3,
		reps: 10,
		time: 10,
		blurb: "Clasp your hands together and lift your arms above your head. Keep your elbows as straight as possible. Maintain the elevation for 10 to 20 seconds. Slowly lower your arms. Repeat 10 to 20 times per session.",
		image: shoulder_elevation,
	},
	{
		uuid: "1854e030-2aa6-4608-9735-086bebac4b1d",
		name: "Supported Shoulder Rotation (Assisted)",
		sets: 3,
		reps: 10,
		time: null,
		blurb: "Slide your forearm back and forth, as shown. You can also perform this exercise using a stick or cane to assist your arm outward (keeping your elbow at your side).",
		image: shoulder_rotation,
	},
	{
		uuid: "7aef6e01-b523-4ade-a42e-e32e6a0370ae",
		name: "Shoulder Internal Rotation (Assisted)",
		sets: 3,
		reps: 10,
		time: null,
		blurb: "Use your other hand or a towel to help bring your involved hand behind your back and across to the opposite side.",
		image: shoulder_internal_rotation_assisted,
	},
	{
		uuid: "310b46b5-8ace-4885-ac89-9fce69bb21ac",
		name: "Walk Up Exercise (Active)",
		sets: 3,
		reps: 10,
		time: 10,
		blurb: 'With your elbow straight, use your fingers to "crawl" up a wall or door frame as far as possible. Hold for 10 to 20 seconds.',
		image: walk_up,
	},
	{
		uuid: "320154f0-1886-4be0-9714-c9acbcf4e8d0",
		name: "Shoulder Forward Elevation (Active)",
		sets: 3,
		reps: 10,
		time: 10,
		blurb: "Raise your arm upward to point to the ceiling, keeping your elbows straight and leading with your thumb, as shown. Hold for 10 seconds.",
		image: shoulder_elevation_active,
	},
	{
		uuid: "2b4596fa-31f4-494c-ba35-939d17655b19",
		name: "Shoulder Abduction (Active)",
		sets: 3,
		reps: 3,
		time: null,
		blurb: "Raise your arm out to the side, with your elbow straight and your palm downward. Do not shrug your shoulder or tilt your trunk.",
		image: shoulder_abduction,
	},
	{
		uuid: "170e2942-3fe5-4d54-b387-9e6db585e50f",
		name: "Shoulder Extension (Isometric)",
		sets: 3,
		reps: 10,
		time: 5,
		blurb: "Keeping your elbows straight, push your arms back into the wall. Hold for 5 seconds, and then relax.",
		image: shoulder_extension,
	},
	{
		uuid: "d8c61d12-ee63-4173-8773-9aadb0937bdb",
		name: "Shoulder External Rotation (Isometric)",
		sets: 3,
		reps: 10,
		time: 5,
		blurb: "Push the back of your hand slowly into the wall. Hold for 5 seconds, and then relax.",
		image: shoulder_external_rotation,
	},
	{
		uuid: "213ddf42-892d-443f-b267-1608b9604476",
		name: "Shoulder Internal Rotation (Isometric)",
		sets: 3,
		reps: 10,
		time: 5,
		blurb: "Push the palm of your hand into the wall. Hold for 5 seconds, and then relax.",
		image: shoulder_internal_rotation,
	},
	{
		uuid: "e427973c-53f8-4984-98cd-a526fd01e374",
		name: "Shoulder Adduction (Isometric)",
		sets: 3,
		reps: 10,
		time: 5,
		blurb: "Place a small pillow between your inner arm and the side of your chest, as shown. With your arm, squeeze the pillow against the side of your chest. Hold for 5 seconds, and then relax.",
		image: shoulder_adduction,
	},
	{
		uuid: "5de3bce7-e5a1-4eb9-8731-dad80922e652",
		name: "Shoulder Abduction (Isometric)",
		sets: 3,
		reps: 10,
		time: 5,
		blurb: "Resisting upward motion to the side, slowly and gently push your arm against the back of a sturdy chair or sofa. Hold for 5 seconds, and then relax.",
		image: shoulder_abduction_iso,
	},
	{
		uuid: "ed8ef426-bed1-42da-85bf-0164dcf778b3",
		name: "Shoulder Internal Rotation (Strengthening)",
		sets: 3,
		reps: 10,
		time: null,
		blurb: "Lie on your involved side. Keep your elbow bent at 90°. Holding a light weight, raise your hand toward your stomach. Slowly return.",
		image: shoulder_internal_rotation_strength,
	},
	{
		uuid: "e92d3df6-39f2-45ee-acd1-04851e01632c",
		name: "Shoulder External Rotation (Strengthening)",
		sets: 3,
		reps: 10,
		time: null,
		blurb: "Lie on your uninvolved side. Keep your elbow bent at 90°. Holding a light weight, raise your hand away from your stomach. Slowly return.",
		image: shoulder_external_rotation_strength,
	},
];

export default base_exercises;
