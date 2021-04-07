import React, { useEffect } from "react";
import "../Style/Skills.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Progress bar function
function LinearProgressWithLabel(props) {
	return (
		<Box display="flex" alignItems="center">
			<Box width="80%" mr={1}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box minWidth={35}>
				<Typography variant="body2" color="textSecondary">{`${Math.round(
					props.value
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

LinearProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate and buffer variants.
	 * Value between 0 and 100.
	 */
	value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
});

function Skill({ logo, limit }) {
	// progress bars logic
	const classes = useStyles();
	const [progress, setProgress] = React.useState(0);

	useEffect(() => {
		// Observer
		let trueCount = 0;
		const observer = new IntersectionObserver(
			function (entries) {
				// isIntersecting is true when element and viewport are overlapping
				// isIntersecting is false when element and viewport don't overlap
				if (entries[0].isIntersecting === true) {
					trueCount++;
					if (trueCount === 1) {
						const timer = setTimeout(() => {
							console.log("Element has just become visible in screen");
							setProgress((prevProgress) =>
								prevProgress >= limit ? 0 : prevProgress + limit
							);
						}, 800);

						return () => {
							clearInterval(timer);
						};
					}
				}
			},
			{ threshold: [0.2] }
		);

		observer.observe(document.querySelector(".Skill__ProgressbarContainer"));

		//
	}, []);

	return (
		<div className="Skill__container">
			<div className="Skill_MiniContainer">
				<img src={logo} alt="" className="Skill__Logo" />
			</div>
			<LinearProgressWithLabel
				className="Skill__ProgressbarContainer"
				value={progress}
			/>
		</div>
	);
}

export default Skill;
