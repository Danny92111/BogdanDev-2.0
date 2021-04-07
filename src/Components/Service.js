import React from "react";
import "../Style/Skills.css";

function Service({ title, descr, img }) {
	return (
		<div className="Service__container">
			<div className="Service__miniWrapper">
				<h2 className="Service__title">{title}</h2>
				<img src={img} alt="" className="Service__Logo" />
			</div>
			<p className="Service__description">{descr}</p>
		</div>
	);
}

export default Service;
