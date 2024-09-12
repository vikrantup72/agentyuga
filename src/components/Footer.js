// Footer.js
import React from "react";
import "./Footer.css"; // Ensure to import the CSS file for styling

const Footer = () => {
	const currentYear = new Date().getFullYear(); // Get the current year

	return (
		<footer className="footer-container">
			<p className="footer-text">
				Copyright &copy; {currentYear} AgentYuga. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
