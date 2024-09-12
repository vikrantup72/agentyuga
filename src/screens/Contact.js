import React, { useRef } from "react";
import Header from "../components/Header"; // Ensure the path is correct
import "./Contact.css"; // Import your CSS file
import ImageScroller from "../components/ImageScroller";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_he4au7r", // Replace with your EmailJS service ID
				"template_t88i6uj", // Replace with your EmailJS template ID
				form.current,
				"UYkX-nEtYTO4T7KSS" // Replace with your EmailJS user ID
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("Message sent successfully!");
                    form.current.reset();
				},
				(error) => {
					console.log(error.text);
					alert("An error occurred, please try again.");
				}
			);
	};

	return (
		<div className="Contact-container">
			<Header />
			<div className="Contact-main">
				<div className="Contact-content-wrapper">
					<h1 className="Contact-title">Reach out to us anytime</h1>
					<p className="Contact-description">
						Whether you have questions about our platform, need technical
						support, or want to learn more about our solutions, our team is
						ready to assist you.
					</p>
				</div>
				<div className="Contact-image">
					<form ref={form} onSubmit={sendEmail} className="Contact-form">
						<input type="text" name="from_name" placeholder="Name" required />
						<input
							type="email"
							name="user_email"
							placeholder="Email"
							required
						/>
						<input
							type="tel"
							name="user_phone"
							placeholder="Phone Number"
							required
						/>
						<input type="text" name="message" placeholder="Subject" required />
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
			{/* 4th Section */}
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

export default Contact;
