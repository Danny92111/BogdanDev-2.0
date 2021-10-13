import React, { useState } from "react";
import "../Style/Projects.css";
import Oxford from "../Media/Thumbnails/Oxford_Dental_Centre.jpeg";
import Baseri from "../Media/Thumbnails/Baseri_Barber_Shop.jpeg";
import Chez from "../Media/Thumbnails/Chez_Lalee.jpeg";
import Simplicity from "../Media/Thumbnails/Simplicity_IT.jpeg";
import AmazonClone from "../Media/Thumbnails/Amazon_Clone.jpeg";
import NetflixClone from "../Media/Thumbnails/Netflix_Clone.jpeg";
import WhatsAppClone from "../Media/Thumbnails/Whatsapp_Clone.jpeg";
import LinkedInClone from "../Media/Thumbnails/Linked_In.jpeg";
import Tota from "../Media/Thumbnails/Tota_Builders_Ltd.jpeg";

function Projects() {
	const [ThumbnailCommercial, SetThumbnail] = useState(1);
	console.log(ThumbnailCommercial);

	return (
		<div className="Projects__MainContainer">
			<div id="Projects" className="fix-header"></div>
			<div className="Projects__container">
				<h2 className="Projects__Maintitle">Check out my projects</h2>
				<div className="Projects__SmallContainer">
					<div className="Projects__SecondaryTitleContainer">
						<h2
							className={ThumbnailCommercial && "activeThumbnail"}
							onClick={() => SetThumbnail(1)}
						>
							Commercial Projects
						</h2>
						<h2
							className={!ThumbnailCommercial && "activeThumbnail"}
							onClick={() => SetThumbnail(0)}
						>
							Personal Projects
						</h2>
					</div>
					<div className="Projects__ThumbnailContainer">
						<div
							className={`Projects__MiniThumbnailContainer ${
								!ThumbnailCommercial && "go-left"
							}`}
						>
							<div className="Projects__HoverContainer">
								<img
									src={Tota}
									alt=""
									className="Projects__Thumbnail ThumbTota"
								/>
								<a href="https://www.totabuildersltd.co.uk/" target="blank">
									Visit Website
								</a>
							</div>
							<div className="Projects__HoverContainer">
								<img
									src={Oxford}
									alt=""
									className="Projects__Thumbnail ThumbOxford"
								/>
								<a href="https://www.oxforddentalcentre.co.uk/" target="blank">
									Visit Website
								</a>
							</div>
							<div className="Projects__HoverContainer">
								<img
									src={Baseri}
									alt=""
									className="Projects__Thumbnail ThumbBaseri"
								/>
								<a href="https://www.baseribarbershop.com/" target="blank">
									Visit Website
								</a>
							</div>
							<div className="Projects__HoverContainer">
								<img
									src={Chez}
									alt=""
									className="Projects__Thumbnail ThumbChez"
								/>
								<a href="https://chez-lalee.netlify.app/" target="blank">
									Visit Website
								</a>
							</div>
							<div className="Projects__HoverContainer">
								<img
									src={Simplicity}
									alt=""
									className="Projects__Thumbnail ThumbSimplicity"
								/>
								<a href="https://www.simplicityitinc.com/" target="blank">
									Visit Website
								</a>
							</div>
						</div>

						<div
							className={`Projects__MiniThumbnailContainer ${
								ThumbnailCommercial && "display-none"
							}`}
						>
							<div className="Projects__HoverContainer">
								<img
									src={AmazonClone}
									alt=""
									className="Projects__Thumbnail ThumbAmazonClone"
								/>
								<a href="https://clone-5b1e8.web.app" target="blank">
									Visit Website
								</a>
							</div>
							<div className="Projects__HoverContainer">
								<img
									src={NetflixClone}
									alt=""
									className="Projects__Thumbnail ThumbNetflixClone"
								/>
								<a href="https://netflix-clone-84fd6.web.app" target="blank">
									Visit Website
								</a>
							</div>
							<div className="Projects__HoverContainer">
								<img
									src={WhatsAppClone}
									alt=""
									className="Projects__Thumbnail ThumbWhatsAppClone"
								/>
								<a href="https://whatsapp-clone-bfadd.web.app" target="blank">
									Visit Website
								</a>
							</div>
							<div className="Projects__HoverContainer">
								<img
									src={LinkedInClone}
									alt=""
									className="Projects__Thumbnail ThumbWhatsAppClone"
								/>
								<a href="https://linkedin-clone-a0f4f.web.app/" target="blank">
									Visit Website
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
