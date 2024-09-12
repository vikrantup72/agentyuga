import React, { useState } from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="header">
			<div className="logo">AgentYuga</div>
			<nav>
				<div className="burger-menu" onClick={toggleMenu}>
					<div className={`bar ${isOpen ? "active" : ""}`}></div>
					<div className={`bar ${isOpen ? "active" : ""}`}></div>
					<div className={`bar ${isOpen ? "active" : ""}`}></div>
				</div>
				<ul className={`nav-menu ${isOpen ? "open" : ""}`}>
					<li className="nav-item">
						<a href="/" className="nav-link">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="/about" className="nav-link">
							About
						</a>
					</li>
					<li className="nav-item">
						<a href="/contact" className="nav-link">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
