import React, { useRef, useEffect } from "react";
import "./ImageScroller.css"; // Import the CSS file
import dataImg from "../assets/images/data.jpg";
import hrImg from "../assets/images/hr.jpeg";
import salesImg from "../assets/images/sales.jpg";

const ImageScroller = () => {
	const scrollContainer1 = useRef(null);
	const scrollContainer2 = useRef(null);

	const imageData = {
		images1: [
			"https://framerusercontent.com/images/vXxrIZDFEdcYsaqEYWnpcVYilU.png",
			"https://framerusercontent.com/images/hqIVsN8SplywoxNsCXdrELqh3Uc.png",
			"https://framerusercontent.com/images/axEbQrKhpYjJigPMinun2ajkc.png",
			"https://framerusercontent.com/images/hqIVsN8SplywoxNsCXdrELqh3Uc.png",
			"https://framerusercontent.com/images/vXxrIZDFEdcYsaqEYWnpcVYilU.png",
			"https://framerusercontent.com/images/ZCcbDAFfIHYrHLOqtVLKQXAIGY.png",
			"https://framerusercontent.com/images/Qs7RpNfTc6MXJVwxIY8QzQDhQ.png",
			"https://framerusercontent.com/images/PFfPRPqCnleo77thxuLEpUUjB0.png",
			"https://framerusercontent.com/images/T9PpAagNI1pVt63DYJjSH5ViE.png",
			"https://framerusercontent.com/images/axEbQrKhpYjJigPMinun2ajkc.png",
			"https://framerusercontent.com/images/neJyiCkJGsL33q9aEvjzzHMKHo.png",
			"https://framerusercontent.com/images/vXxrIZDFEdcYsaqEYWnpcVYilU.png",
			"https://framerusercontent.com/images/hqIVsN8SplywoxNsCXdrELqh3Uc.png",
			"https://framerusercontent.com/images/axEbQrKhpYjJigPMinun2ajkc.png",
		],
		images2: [
			"https://framerusercontent.com/images/T9PpAagNI1pVt63DYJjSH5ViE.png",
			"https://framerusercontent.com/images/axEbQrKhpYjJigPMinun2ajkc.png",
			"https://framerusercontent.com/images/neJyiCkJGsL33q9aEvjzzHMKHo.png",
			"https://framerusercontent.com/images/vXxrIZDFEdcYsaqEYWnpcVYilU.png",
			"https://framerusercontent.com/images/hqIVsN8SplywoxNsCXdrELqh3Uc.png",
			"https://framerusercontent.com/images/axEbQrKhpYjJigPMinun2ajkc.png",
			"https://framerusercontent.com/images/vXxrIZDFEdcYsaqEYWnpcVYilU.png",
			"https://framerusercontent.com/images/hqIVsN8SplywoxNsCXdrELqh3Uc.png",
			"https://framerusercontent.com/images/axEbQrKhpYjJigPMinun2ajkc.png",
			"https://framerusercontent.com/images/hqIVsN8SplywoxNsCXdrELqh3Uc.png",
			"https://framerusercontent.com/images/vXxrIZDFEdcYsaqEYWnpcVYilU.png",
			"https://framerusercontent.com/images/ZCcbDAFfIHYrHLOqtVLKQXAIGY.png",
			"https://framerusercontent.com/images/Qs7RpNfTc6MXJVwxIY8QzQDhQ.png",
			"https://framerusercontent.com/images/PFfPRPqCnleo77thxuLEpUUjB0.png",
		],
	};

	useEffect(() => {
		const scrollLeft = () => {
			if (scrollContainer1.current) {
				scrollContainer1.current.scrollLeft += 1;
				if (
					scrollContainer1.current.scrollLeft >=
					scrollContainer1.current.scrollWidth -
						scrollContainer1.current.clientWidth
				) {
					scrollContainer1.current.scrollLeft = 0;
				}
			}
		};

		const scrollRight = () => {
			if (scrollContainer2.current) {
				scrollContainer2.current.scrollLeft -= 1;
				if (scrollContainer2.current.scrollLeft <= 0) {
					scrollContainer2.current.scrollLeft =
						scrollContainer2.current.scrollWidth;
				}
			}
		};

		const interval1 = setInterval(scrollLeft, 30); // Adjust speed as needed
		const interval2 = setInterval(scrollRight, 30); // Adjust speed as needed

		return () => {
			clearInterval(interval1);
			clearInterval(interval2);
		};
	}, []);

	return (
		<div>
			<div className="scroll-container" ref={scrollContainer1}>
				{imageData.images1.map((src, index) => (
					<img
						key={index}
						src={src}
						alt={`Image 1 ${index}`}
						className="scroll-image"
					/>
				))}
			</div>
			<div className="scroll-container" ref={scrollContainer2}>
				{imageData.images2.map((src, index) => (
					<img
						key={index}
						src={src}
						alt={`Image 2 ${index}`}
						className="scroll-image"
					/>
				))}
			</div>
		</div>
	);
};

export default ImageScroller;
