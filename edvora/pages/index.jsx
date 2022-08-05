import Navigation from "../components/Navigation";
export default function Home({ user, data }) {
	const { name, station_code, url } = user;

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
			<Navigation code={station_code} data={data} />
		</main>
	);
}

export async function getServerSideProps() {
	const res = await fetch("https://assessment.api.vweb.app/user");
	const user = await res.json();

	const res2 = await fetch("https://assessment.api.vweb.app/rides");
	const data = await res2.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	if (!user) {
		return {
			notFound: true,
		};
	}

	return {
		props: { user, data },
	};
}
