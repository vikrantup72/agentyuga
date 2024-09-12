import React from "react";
import Header from "../components/Header"; // Make sure the path is correct
import "./About.css"; // Import the CSS file
import ImageScroller from "../components/ImageScroller";
import Footer from "../components/Footer";

const About = () => {
	return (
		<div className="about-container">
			<Header />
			<div className="about-content-wrapper">
				<h1 className="about-title">
					Transform Your Business with AgentYuga's AI Innovation
				</h1>
				<p className="about-description">
					At AgentYuga, we are leading the future of business optimization with
					AI-driven digital agents designed to transform organizational
					operations. Founded by experts with over 20 years of experience in
					Consulting, Ecommerce, EdTech, and Finance, we understand the unique
					challenges of modern businesses. Our mission is to integrate
					intelligent digital agents into your organization, enhancing HR,
					Sales, Marketing, and Customer Experience through optimized operations
					and innovative decision-making. With AgentYuga, you’re not just
					adopting AI technology; you’re partnering with industry experts
					dedicated to driving your business’s growth and success.
				</p>
			</div>
			{/* 4th Section */}
			<div className="forth-section">
				<h1 className="transform-title">
					Seamless Integration
					<br />
					with
				</h1>
			</div>
			<div className="image-scroller-wrapper">
				<ImageScroller />
				<Footer />
			</div>
		</div>
	);
};

export default About;
