import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://linkedin.com"
				target="_bland"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://github.com"
				target="_bland"
			>
				<FaGithub />
			</a>
			<a
				href="https://telegram.com"
				target="_bland"
			>
				<FaTelegram />
			</a>
		</div>
	);
};

export default HeaderSocials;
