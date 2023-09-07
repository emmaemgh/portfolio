import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./atlassian.jpeg"
								alt="atlassian"
								className="work-image"
							/>
							<div className="work-title">Atlassian</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">May 2023 - August 2023</div>
						</div>

						<div className="work">
							<img
								src="./attentive.jpg"
								alt="attentive"
								className="work-image"
							/>
							<div className="work-title">Attentive Mobile</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">June 2022 - August 2022</div>
						</div>
						<div className="work">
							<img
								src="./gauntlet.png"
								alt="gauntlet"
								className="work-image"
							/>
							<div className="work-title">Gauntlet Consulting Club</div>
							<div className="work-subtitle">
								Tech Program Lead & Website Developer
							</div>
							<div className="work-duration">Feb 2021 - May 2022</div>
						</div>
						<div className="work">
							<img
								src="./bpt.jpeg"
								alt="BPT"
								className="work-image"
							/>
							<div className="work-title">Berkeley Pharma Tech</div>
							<div className="work-subtitle">
								Game & App Developer Intern
							</div>
							<div className="work-duration">Jan 2022 - May 2022</div>
						</div>
						<div className="work">
							<img
								src="./ucla.svg"
								alt="UCLA"
								className="work-image"
							/>
							<div className="work-title">UCLA Cardiology</div>
							<div className="work-subtitle">
								Data Analyst & Research Assistant 
							</div>
							<div className="work-duration">Jan 2020 - May 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
