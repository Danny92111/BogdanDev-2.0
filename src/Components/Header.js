import React, { useEffect, useState } from "react";
import "../Style/Header.css";
import { IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "../App.css";

function Header() {
	const [visibilty, setVisibilty] = useState(false);
	const [pallete, setPallete] = useState(1);

	//------------------------------>> Change Themes
	useEffect(() => {
		const ChangeColor = (pallete) => {
			switch (pallete) {
				case 1:
					document.documentElement.style.setProperty("--one", "#0e3658");
					document.documentElement.style.setProperty("--two", "#165081");
					document.documentElement.style.setProperty("--three", "#fc3c3c");
					document.documentElement.style.setProperty("--four", "#29abf4");
					document.documentElement.style.setProperty("--five", "#ffffff");
					document.documentElement.style.setProperty(
						"--font",
						"'Comfortaa', cursive"
					);
					break;
				case 2:
					document.documentElement.style.setProperty("--one", "#2efac7");
					document.documentElement.style.setProperty("--two", "#f8b53a");
					document.documentElement.style.setProperty("--three", "#ffbf80");
					document.documentElement.style.setProperty("--four", "#f8425f");
					document.documentElement.style.setProperty("--five", "#2d4059");
					document.documentElement.style.setProperty(
						"--font",
						"'Antic Slab', serif"
					);

					break;
				case 3:
					document.documentElement.style.setProperty("--one", "#102754");
					document.documentElement.style.setProperty("--two", "#453cc9");
					document.documentElement.style.setProperty("--three", "#0b76a8");
					document.documentElement.style.setProperty("--four", "#d4e8ff");
					document.documentElement.style.setProperty("--five", "#ffffff");
					document.documentElement.style.setProperty(
						"--font",
						"'Prompt', cursive"
					);
					break;
				case 4:
					document.documentElement.style.setProperty("--one", "#474242");
					document.documentElement.style.setProperty("--two", "#ee7070");
					document.documentElement.style.setProperty("--three", "#947a05");
					document.documentElement.style.setProperty("--four", "#b8f0c8");
					document.documentElement.style.setProperty("--five", "#d4e8ff");
					document.documentElement.style.setProperty(
						"--font",
						"'Nanum Gothic', sans-serif"
					);
					break;
				case 5:
					document.documentElement.style.setProperty("--one", "#143959");
					document.documentElement.style.setProperty("--two", "#1f7396");
					document.documentElement.style.setProperty("--three", "#188167");
					document.documentElement.style.setProperty("--four", "#f8e7ae");
					document.documentElement.style.setProperty("--five", "#ffffff");
					document.documentElement.style.setProperty(
						"--font",
						"'Play', sans-serif"
					);
					break;
				default:
					break;
			}
		};
		ChangeColor(pallete);

		return () => {
			ChangeColor(pallete);
		};
	}, [pallete]);

	//----------------------------->> Make Nav bar visibile after it hits 100vh
	useEffect(() => {
		const height = window.innerHeight - 200;

		const makeNavVisibile = () => {
			if (window.scrollY > height) {
				setVisibilty(true);
			} else {
				setVisibilty(false);
			}
		};

		window.addEventListener("scroll", makeNavVisibile);

		return () => {
			window.removeEventListener("scroll", makeNavVisibile);
		};
	}, []);

	return (
		<div className={`header__container ${visibilty && "visible"}`}>
			<ul className="header__containerList">
				<IconButton>
					<a href="#Home">
						<li className="header__item">Home</li>
					</a>
				</IconButton>
				<IconButton>
					<a href="#About">
						<li className="header__item">About</li>
					</a>
				</IconButton>
				<IconButton>
					<a href="#Projects">
						<li className="header__item">Projects</li>
					</a>
				</IconButton>
				<IconButton>
					<a href="#Skills">
						<li className="header__item">Skills</li>
					</a>
				</IconButton>
				<IconButton>
					<a href="#Contact">
						<li className="header__item">Contact</li>
					</a>
				</IconButton>
			</ul>
			<div className="header__themeWebsiteContainer">
				<div className="header__themeContainer">
					<p>Change theme</p>
					<div className="header__themeSmallContainer">
						<div
							className={`header__theme color1 ${
								pallete === 1 && "activeColor"
							}`}
							onClick={() => {
								setPallete(1);
							}}
						></div>
						<div
							className={`header__theme color2 ${
								pallete === 2 && "activeColor"
							}`}
							onClick={() => {
								setPallete(2);
							}}
						></div>
						<div
							className={`header__theme color3 ${
								pallete === 3 && "activeColor"
							}`}
							onClick={() => {
								setPallete(3);
							}}
						></div>
						<div
							className={`header__theme color4 ${
								pallete === 4 && "activeColor"
							}`}
							onClick={() => {
								setPallete(4);
							}}
						></div>
						<div
							className={`header__theme color5 ${
								pallete === 5 && "activeColor"
							}`}
							onClick={() => {
								setPallete(5);
							}}
						></div>
					</div>
				</div>
				<a
					href="https://bogdan-dev-v1.netlify.app/"
					target="_blank"
					className="header__goToWebsiteContainer"
				>
					<p>See previous Website</p>
					<ArrowForwardIosIcon />
				</a>
			</div>
		</div>
	);
}

export default Header;
