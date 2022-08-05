import Ride from "../components/Ride";
import Rides from "../components/Rides";

/*
if state is true:
   filter objects containing only tthe city and state name 

if city is true:
   filter objects containing only tthe city  name 

if bith are true:
   filter objects containing both tthe city and state name 
*/
export default function RidesWrap({ code, rides }) {
	const renderRides = rides.map((ride, id) => (
		<Ride key={id} ride={ride} code={code} />
	));
	return <Rides>{renderRides}</Rides>;
}
