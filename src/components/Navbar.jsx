import React from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

const Navbar = () => {
	// const { user, logout } = useAuth();
  const user = null;
	return (
		<nav className="bg-gray-800 bg-opacity-80 backdrop-blur-md text-white fixed w-full top-0 z-10 px-4 py-3">
			<div className="container mx-auto flex justify-between items-center">
				<img src="img/tmslogo.png" alt="Logo" className="h-16" />
				<h1 className="text-3xl font-bold">AlumniConnect</h1>
				<ul className="flex space-x-4 text-lg">
					<li>
						<Link
							to="/"
							className="hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="/gallery"
							className="hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Gallery
						</Link>
					</li>
					<li>
						<Link
							to="/events"
							className="hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Events
						</Link>
					</li>
					<li>
						<Link
							to="/alumni"
							className="hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Alumni
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className="hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Contact
						</Link>
					</li>
					{!user ? (
						<li>
							<Link
							to="/login"
							className="hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
								Login
							</Link>
						</li>
					) : (
						<>
							<li>
								<Link to="/profile" className="hover:underline">
									Profile
								</Link>
							</li>
							<li>
								<button
									// onClick={logout}
									className="text-red-400 hover:underline"
								>
									Logout
								</button>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
