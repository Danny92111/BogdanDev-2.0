import React from "react";
import "../Style/About.css";
import PicAbout from "../Style/Pic__About.jpg";
import GetAppIcon from "@material-ui/icons/GetApp";

function About() {
	return (
		<div className="About__MainContainer ">
			<div id="About" className="fix-header"></div>
			<div className="About__container">
				<img src={PicAbout} alt="" className="About__picture" />
				<div className="About__textContainer">
					<h1 className="About__Title">About me</h1>
					<p className="About__descr">
						Hi there. Thank you for taking an interest in my goal to becoming a
						web developer. My name is Bogdan and I'm a self taught developer. My
						journey started in March 2019 when I decided it was time for a
						career change. As I started learning more, I developed a passion for
						programming. Have a look through my web-portofolio and feel free to
						contact me if you have any questions.
					</p>
					<div className="About__ContactContainer">
						<div className="About__ContactContainerDetails">
							<h1 className="About__Title">Contact details</h1>
							<p className="About__ContactDetails">
								Bogdan Danilescu <br />
								London, United Kingdom <br />
								+44 7521799936 <br />
								danilescubogdan92@gmail.com
							</p>
						</div>
						<div className="About__resumeContainer">
							<GetAppIcon />
							<h3>Download resume</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
