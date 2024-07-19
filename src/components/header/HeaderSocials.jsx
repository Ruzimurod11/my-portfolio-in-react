import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/ruzimurod-doniev-243026266/"
				target="_bland"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://github.com/Ruzimurod11"
				target="_bland"
			>
				<FaGithub />
			</a>
			<a
				href="https://t.me/UserIsDev"
				target="_bland"
			>
				<FaTelegram />
			</a>
		</div>
	);
};

export default HeaderSocials;
