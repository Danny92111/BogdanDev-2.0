import React, { useState } from "react";
import "../Style/Reviews.css";
import CloseIcon from "@material-ui/icons/Close";

function Reviews() {
	const [name, setName] = useState(["Name1", "Name2", "Name3"]);
	const [job, setJob] = useState(["Job1", "Job2", "Job3"]);
	const [headShot, setHeadShot] = useState([
		"HeadShot1",
		"HeadShot2",
		"HeadShot3",
	]);
	const [description, setDescription] = useState([
		"description1",
		"description2",
		"description3",
	]);

	return (
		<div className="Reviews__MainContainer">
			<div className="Reviews__closeIcon">
				<CloseIcon />
			</div>
			<div className="Reviews__DescriptionContainer">
				<div className="Reviews__HeadshotContainer">{headShot[0]}</div>
				<div className="Reviews__name-job">
					<p className="Reviews__name">{name[0]}</p>
					<p className="Reviews__job">{job[0]}</p>
				</div>
			</div>
			<div className="Reviews__descriptionParagraph">
				<p className="Reviews__description">{description[0]}</p>
			</div>
		</div>
	);
}

export default Reviews;
