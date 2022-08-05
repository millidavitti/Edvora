import filters from "../styles/filters.module.css";

export default function Filter({ cityState, getCityState, rides }) {
	const { state, city } = cityState;
	const renderStates = rides.map(({ state }, id) => (
		<option key={id} value={state}>
			{state}
		</option>
	));
	const renderCities = rides.map(({ city }, id) => (
		<option key={id} value={city}>
			{city}
		</option>
	));
	return (
		<div className={filters.filters}>
			<div className={filters.wrap}>
				<h2>Filters</h2>
				<div className={filters.options}>
					<select
						name='state'
						id={filters.state}
						className={filters.style}
						onChange={getCityState}
						value={state}
					>
						<option value=''>state</option>
						{renderStates}
						<option value='fct'>FCT</option>
						<option value='crossriver'>CrossRiver</option>
					</select>
					<select
						name='city'
						id={filters.city}
						className={filters.style}
						onChange={getCityState}
						value={city}
					>
						<option value=''>city</option>
						{renderCities}
						<option value='abuja'>Abuja</option>
						<option value='calabr'>Calabar</option>
					</select>
				</div>
			</div>
		</div>
	);
}
