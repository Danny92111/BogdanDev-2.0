import React from "react";
import Skill from "./Skill";
import "../Style/Skills.css";
import LogoHTML from "../Media/Logos/html5.png";
import LogoCSS from "../Media/Logos/css3.png";
import LogoJS from "../Media/Logos/javascript.png";
import LogoReact from "../Media/Logos/react.png";
import LogoNode from "../Media/Logos/node.png";
import LogoPhp from "../Media/Logos/php.png";
import LogoTS from "../Media/Logos/Typescript.png";

function Skills() {
	return (
		<div className="Skills_MainContainer">
			<div id="Skills" className="fix-header"></div>
			<div className="Skills__container">
				<h1 className="Skills_title">Skillset</h1>
				<div className="Skills_SkillsetContainer">
					<Skill limit={80} logo={LogoHTML} />
					<Skill limit={80} logo={LogoCSS} />
					<Skill limit={70} logo={LogoReact} />
					<Skill limit={80} logo={LogoJS} />
					<Skill limit={50} logo={LogoNode} />
					<Skill limit={40} logo={LogoPhp} />
					<Skill limit={60} logo={LogoTS} />
				</div>
			</div>
		</div>
	);
}

export default Skills;
