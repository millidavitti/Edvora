export function sortRides(code, array) {
	const result = array.map((ride) => ({
		...ride,
		station_path: nearestRide(code, ride.station_path),
	}));
	return result.sort(
		(ride1, ride2) =>
			Math.abs(code - ride1.station_path[0]) -
			Math.abs(code - ride2.station_path[0]),
	);
}

function nearestRide(code, array) {
	const close = [];
	const far = [];
	for (const num of array) {
		let leftdigitnum = +(num + "").slice(0, 1);
		let leftdigitcode = +(code + "").slice(0, 1);

		if (code < 10 && num < 10) close.push(num);
		else if (
			Math.abs(num - code) >= 0 &&
			Math.abs(num - code) <= 9 &&
			leftdigitcode === leftdigitnum
		)
			close.push(num);
		else if (num - code > 9 || num - code < 0) far.push(num);
		else far.push(num);
	}
	return [
		...close.sort((a, b) => Math.abs(code - a) - Math.abs(code - b)),
		...far.sort((a, b) => Math.abs(code - a) - Math.abs(code - b)),
	];
}

export async function getRides() {
	const res = await fetch("https://assessment.api.vweb.app/rides");
	const data = await res.json();
	return data;
}

export async function getUser() {
	const res = await fetch("https://assessment.api.vweb.app/user");
	const data = await res.json();
	return data;
}
