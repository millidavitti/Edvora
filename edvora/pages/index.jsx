import { getUser, User } from "../helpers";
import { user2 } from "../mock/mockUser";

import Navigation from "../components/Navigation";
export default function Home() {
	const { name, station_code, url } = user2;

	return (
		<main>
			<header>
				<h2 className='logo'>Edvora</h2>
				<div className='user'>
					<h2 className='user-name'>{name}</h2>
					<div className='avatar-wrap'>
						<img src={url} alt="user's avatar" />
					</div>
				</div>
			</header>
			<Navigation code={station_code} />
		</main>
	);
}
