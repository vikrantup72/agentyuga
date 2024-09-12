import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import About from "./screens/About";
import Contact from "./screens/Contact";
import Dashboard from "./screens/Dashboard"; // Ensure correct path to your Dashboard component

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
};

export default App;
