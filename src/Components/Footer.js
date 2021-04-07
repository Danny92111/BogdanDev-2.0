import React from "react";
import "../Style/Footer.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

function Footer() {
	return (
		<div className="Footer__mainContainer">
			<div className="Footer__Container">
				<a href="#Home">
					<ExpandLessIcon />
				</a>
				<div className="Footer__IconsContainer">
					<a href="https://www.facebook.com/bogdan.danilescu" target="_blank">
						<FacebookIcon className="Footer__icons" />
					</a>
					<a
						href="https://www.instagram.com/bogdanstefandanilescu/"
						target="_blank"
					>
						<InstagramIcon className="Footer__icons" />
					</a>
					<a
						href="https://www.linkedin.com/in/danilescu-bogdan-72827587/"
						target="_blank"
					>
						<LinkedInIcon className="Footer__icons" />
					</a>
					<a href="https://github.com/Danny92111" target="_blank">
						<GitHubIcon className="Footer__icons" />
					</a>
					<a href="#Contact">
						<EmailIcon className="Footer__icons" />
					</a>
				</div>
				<p className="Footer__text">MADE BY Bogdan Danilescu</p>
			</div>
		</div>
	);
}

export default Footer;
