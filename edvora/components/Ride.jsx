import rides from "../styles/rides.module.css";
export default function Ride({ ride, code }) {
	const { city, date, id, map_url, origin_station_code, state, station_path } =
		ride;
	return (
		<div className={rides.ride}>
			<div className={rides.thumb}>
				<img src={map_url} alt='' />
			</div>
			<div className={rides.rideInfo}>
				<p>
					Ride ID : <span>{`${id}`}</span>
				</p>
				<p>
					Origin Station : <span>{`${origin_station_code}`}</span>
				</p>
				<p>
					Station Path : <span>{`${station_path}`}</span>
				</p>
				<p>
					Date : <span>{`${date}`}</span>
				</p>
				<p>
					Distance : <span>{`${Math.abs(code - station_path[0])}`}</span>
				</p>
			</div>
			<div className={rides.rideCityInfo}>
				<div className={rides.city}>{city}</div>
				<div className={rides.state}>{state}</div>
			</div>
		</div>
	);
}
