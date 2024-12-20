import React, { useRef } from "react";

import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_qan7l3g", "template_xkb8kiq", form.current, {
				publicKey: "dexeaW0zViZ9AHJKW",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				},
			);
		e.target.reset();
	};
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineMail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>donievruzimurod@gmail.com</h5>
						<a
							href="mailto:donievruzimurod@gmail.com"
							target="__bland"
						>
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>Ruzimurod Doniev</h5>
						<a
							href="https://m.me/ruzimurod doniev"
							target="_bland"
						>
							Send a message
						</a>
					</article>
				</div>
				{/* end of contact options */}
				<form
					ref={form}
					onSubmit={sendEmail}
				>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						required
					/>
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button
						type="submit"
						className="btn btn-primary"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
