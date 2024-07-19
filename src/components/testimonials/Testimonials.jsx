import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
	{
		avatar: AVTR1,
		name: "Tina Snow",
		review:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vitae explicaboid incidunt, voluptatem enim atque magnam voluptatum consequatur vel! Cumquemaiores nobis architecto assumenda quae quis et dolorum quasi?",
	},
	{
		avatar: AVTR2,
		name: "Shatta Wale",
		review:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vitae explicaboid incidunt, voluptatem enim atque magnam voluptatum consequatur vel! Cumquemaiores nobis architecto assumenda quae quis et dolorum quasi?",
	},

	{
		avatar: AVTR3,
		name: "Kwape Despite",
		review:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vitae explicaboid incidunt, voluptatem enim atque magnam voluptatum consequatur vel! Cumquemaiores nobis architecto assumenda quae quis et dolorum quasi?",
	},
	{
		avatar: AVTR4,
		name: "Nana Ama McBrown",
		review:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vitae explicaboid incidunt, voluptatem enim atque magnam voluptatum consequatur vel! Cumquemaiores nobis architecto assumenda quae quis et dolorum quasi?",
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				className="container testimonials__container"
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide
							key={index}
							className="testimonial"
						>
							<div className="client__avatar">
								<img
									src={avatar}
									alt="avtr"
								/>
							</div>
							<h5 className="client__name"> {name} </h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
