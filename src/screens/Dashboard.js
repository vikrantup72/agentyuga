import React, { useState, useEffect } from "react";
import Header from "../components/Header"; // Make sure the path is correct
import "./Dashboard.css"; // Import the CSS file
import img1 from "../assets/images/sales.jpg";
import img2 from "../assets/images/data.jpg";
import img3 from "../assets/images/hr.jpeg";
import img4 from "../assets/images/marketing.jpeg";
import ImageScroller from "../components/ImageScroller";
import Footer from "../components/Footer";
import backgroundVideo from "../assets/videos/background-video.mp4"; // Add your video path

const Dashboard = () => {
	const [videoOpacity, setVideoOpacity] = useState(1); // Control the opacity of the video

	// Handle scroll event
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const documentHeight = document.documentElement.scrollHeight;
			const windowHeight = window.innerHeight;

			// Calculate the percentage of how far the user has scrolled
			const scrollPercentage = scrollTop / (documentHeight - windowHeight);

			// Set the video opacity based on scroll percentage (closer to bottom, video fades)
			if (scrollPercentage > 0.3) {
				setVideoOpacity(1 - (scrollPercentage - 0.3) * 3); // Start fading after 70% scroll
			} else {
				setVideoOpacity(1); // Fully visible before 70% scroll
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup listener on unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={
				videoOpacity == 1
					? "dashboard-container"
					: "dashboard-container-visible"
			}
		>
			{/* Background Video */}
			<div className="video-container" style={{ opacity: videoOpacity }}>
				<video autoPlay loop muted className="background-video">
					<source src={backgroundVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

			{/* Content */}
			<Header />
			<div className="dashboard-main">
				<div className="dashboard-content-wrapper">
					<h1 className="dashboard-title">
						The Next Generation of Business Optimization
					</h1>
					<p className="dashboard-description">
						Our platform is designed to provide unparalleled efficiency and
						precision in business operations, ensuring seamless integration of
						AI-driven digital agents into your workflows. Partner with us to
						create a smarter, more agile organization that thrives in today’s
						dynamic market. Join us in shaping the future of business, where
						innovation meets intelligent automation.
					</p>
				</div>
				<div className="dashboard-image"></div>
			</div>
			{/* 2nd Section */}
			<div className="second-section">
				<h1 className="transform-title">Transform Your</h1>
			</div>
			{/* 3rd Section - Image Grid */}
			<div className="image-grid">
				<img src={img1} alt="Image 1" className="grid-image" />
				<img src={img2} alt="Image 2" className="grid-image" />
				<img src={img3} alt="Image 3" className="grid-image" />
				<img src={img4} alt="Image 4" className="grid-image" />
			</div>
			{/* 4nd Section */}
			<div className="forth-section">
				<h1 className="transform-title">
					Seamless Integration
					<br />
					with
				</h1>
			</div>
			<ImageScroller />
			<Footer />
		</div>
	);
};

export default Dashboard;
