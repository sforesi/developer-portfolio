import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Experience = dynamic(() => import("../containers/Experience"));
const Skills = dynamic(() => import("../containers/Skills"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Sebastiano Foresi",
					description:
						"A passionate Full Stack Web Developer and Mobile App Developer.",
					image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
					url: "https://developer-portfolio-1Sebastiano100.vercel.app",
					keywords: [
						"Sebastiano",
						"Sebastiano Foresi",
						"@1Sebastiano100",
						"1Sebastiano100",
						"Portfolio",
						"Sebastiano Portfolio ",
						"Sebastiano Foresi Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"mobile app developer",
						"android developer",
						"django",
						"flask",
						"django rest framework",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
						"flutter",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Projects />
			<Skills />
			<Experience />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
