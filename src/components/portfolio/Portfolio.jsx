import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
	{
		id: 1,
		image: IMG1,
		title: "React Pizza",
		github: "https://github.com/Ruzimurod11/react-pizza-ts",
		demo: "https://react-pizza-rd.netlify.app",
	},
	{
		id: 2,
		image: IMG2,
		title: "Posts",
		github: "https://github.com/Ruzimurod11/React",
		demo: "https://react-rd.netlify.app",
	},
	{
		id: 3,
		image: IMG3,
		title: "Game Pokemon",
		github: "https://github.com/Ruzimurod11/GamePokemon",
		demo: "https://gamepokemon-rd.netlify.app",
	},
	{
		id: 4,
		image: IMG4,
		title: "Random Users",
		github: "https://github.com/Ruzimurod11/random-user",
		demo: "ruzimurod11.github.io/random-user/",
	},
	{
		id: 5,
		image: IMG5,
		title: "Weather",
		github: "https://github.com/Ruzimurod11/weather",
		demo: "https://ruzimurod11.github.io/weather/",
	},
	{
		id: 6,
		image: IMG6,
		title: "Create Users",
		github: "https://github.com/Ruzimurod11/create-users",
		demo: "https://users-rd.netlify.app",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article
							key={id}
							className="portfolio__item"
						>
							<div>
								<div className="portfolio__item-image">
									<img
										src={image}
										alt="img"
									/>
								</div>
								<h3>{title} </h3>
							</div>
							<div className="portfolio__item-cta">
								<a
									href={github}
									className="btn"
									target="__blank"
								>
									Github
								</a>
								<a
									href={demo}
									className="btn btn-primary"
									target="__blank"
								>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
