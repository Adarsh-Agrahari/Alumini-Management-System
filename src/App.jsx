import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/events" element={<Events />} />
					<Route path="/alumni" element={<Alumni />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
