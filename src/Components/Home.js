import React from "react";
import "../Style/Home.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

function Home() {
	return (
		<div id="Home" className="Home__container">
			<div className="Home__miniContainer">
				<h1 className="Home__miniContainer__Name">I'm Bogdan Danilescu.</h1>
				<p className="Home__miniContainer__description">
					Self taught developer, based in London.
				</p>
				<div className="Home__SocialMediaContainer">
					<a href="https://www.facebook.com/bogdan.danilescu" target="_blank">
						<FacebookIcon className="Home__icons" />
					</a>
					<a
						href="https://www.instagram.com/bogdanstefandanilescu/"
						target="_blank"
					>
						<InstagramIcon className="Home__icons" />
					</a>
					<a
						href="https://www.linkedin.com/in/danilescu-bogdan-72827587/"
						target="_blank"
					>
						<LinkedInIcon className="Home__icons" />
					</a>
					<a href="https://github.com/Danny92111" target="_blank">
						<GitHubIcon className="Home__icons" />
					</a>
					<a href="#Contact">
						<EmailIcon className="Home__icons" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;
