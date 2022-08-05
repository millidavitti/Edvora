import Ride from "../components/Ride";
import Rides from "../components/Rides";

/*
if only state is set:
   filter objects containing only tthe city and state name 

if only city is set:
   filter objects containing only tthe city  name 

if both are set:
   filter objects containing both tthe city and state name 
*/
export default function RidesWrap({ code, rides, bool, reveal }) {
	const renderRides = rides.map((ride, id) => (
		<Ride key={id} ride={ride} code={code} />
	));
	return (
		<Rides>
			{renderRides}
			{bool && <div className='overlay' onClick={reveal}></div>}
		</Rides>
	);
}
