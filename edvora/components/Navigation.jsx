import { useState } from "react";
import { sortRides } from "../helpers";
import data from "../mock/mockRides";
import filt from "../assets/filters.png";
import Filter from "../components/Filter";
import RidesWrap from "../components/RidesWrap";
export default function Navigation({ code }) {
	// States
	const [active, setActiveTab] = useState([
		{ id: "nr", name: "Nearest Rides", set: true },
		{ id: "ur", name: "Upcoming Rides", set: false },
		{ id: "pr", name: "Past Rides", set: false },
	]);
	const [filterRevealed, setFilterRevealed] = useState(false);
	const [cityState, setCityState] = useState({
		state: "",
		city: "",
	});

	// Filter Logic
	let rides = data;
	if (cityState.city) rides = data.filter((obj) => obj.city === cityState.city);
	else if (cityState.state)
		rides = data.filter((obj) => obj.state === cityState.state);
	else if (cityState.city && cityState.state)
		rides = data.filter(
			(obj) => obj.city === cityState.city && obj.state === cityState.state,
		);

	// Dynamic Styles
	const underline = {
		borderBottom: "2px solid #d0cbcb",
	};

	// Callback Functions
	const tabFn = (event) => {
		const {
			target: { id },
		} = event;
		setActiveTab((pre) =>
			pre.map((act) => {
				return id === act.id ? { ...act, set: true } : { ...act, set: false };
			}),
		);
	};

	const getCityState = (event) => {
		const {
			target: { name, value },
		} = event;
		setCityState((pre) => {
			if (name === "state") return { ...pre, state: value };
			else if (name === "city") return { ...pre, city: value };
		});
	};

	// Renders

	const nearestRides = sortRides(code, rides);

	const tabs = active.map((obj) => {
		const active = obj.set ? underline : {};
		if (obj.set)
			return (
				<h2 key={obj.id} id={obj.id} onClick={tabFn} style={active}>
					{obj.name}
				</h2>
			);
		else
			return (
				<h2 key={obj.id} id={obj.id} onClick={tabFn}>
					{obj.name}
					{`(${4})`}
				</h2>
			);
	});

	return (
		<>
			<nav className='rides-tab'>
				<div className='tabs'>{tabs}</div>
				<div className='filters'>
					<img
						src={filt}
						alt='filters'
						onClick={() => setFilterRevealed(!filterRevealed)}
					/>
					{filterRevealed && (
						<Filter
							getCityState={getCityState}
							cityState={cityState}
							rides={data}
						/>
					)}
				</div>
			</nav>
			<RidesWrap code={code} rides={nearestRides} />
		</>
	);
}
