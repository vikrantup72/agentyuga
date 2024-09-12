import React from "react";
import "./ImageCircle.css"; // Import the CSS file
import dataImg from "../assets/images/data.jpg";
import hrImg from "../assets/images/hr.jpeg";
import salesImg from "../assets/images/sales.jpg";
const ImageCircle = () => {
	// Define the image sources
	const centerImage = hrImg; // Center image
	const surroundingImages = [dataImg, hrImg, salesImg, dataImg];

	return (
		<div className="image-circle-container">
			<img src={centerImage} alt="Center" className="center-image" />
			{surroundingImages.map((src, index) => (
				<img
					key={index}
					src={src}
					alt={`Surrounding ${index}`}
					className={`surrounding-image image-${index}`}
				/>
			))}
		</div>
	);
};

export default ImageCircle;
