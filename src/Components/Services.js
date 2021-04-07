import React from "react";
import "../Style/Skills.css";
import Service from "./Service";
import Mobile from "../Media/LogosServices/mobile.png";
import Development from "../Media/LogosServices/development.png";
import WebDesign from "../Media/LogosServices/web design.png";
import WebSecurity from "../Media/LogosServices/web security.png";

function Services() {
	return (
		<div className="Services__MainContainer paralax">
			<div className="Services__container">
				<h1 className="Services__title">Services</h1>
				<div className="Services__minicontainer">
					<Service
						title="Mobile-Friendly"
						descr="There are several ways and approaches in creating a responsive website, but you don’t have to worry about that as I will choose the best option for you and your business."
						img={Mobile}
					/>
					<Service
						title="Design"
						descr="The design of a website plays a big role in attracting users. By taking in consideration the client’s website objectives my goal is to achieve an aesthetically pleasing layout."
						img={WebDesign}
					/>
					<Service
						title="Development"
						descr="By using programming languages, the web developer will build the website’s core structure as well as maintaining it and optimising the website’s performance."
						img={Development}
					/>
					<Service
						title="Security"
						descr="Secure web application development is key when it comes to protecting my clients and guaranteeing them a safe website."
						img={WebSecurity}
					/>
				</div>
			</div>
		</div>
	);
}

export default Services;
