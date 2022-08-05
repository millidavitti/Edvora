import rides from "../styles/rides.module.css";
export default function Rides({ children }) {
	return <div className={rides.rides}>{children}</div>;
}
