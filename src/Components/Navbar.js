import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {
	let navigate = useNavigate();
	let logout = () => {
		navigate("/");
	};

	
	return (
		

		<nav className=" container-fluid p-3 shadow fixed-top navbar navbar-light bg-white " style={{ position: "sticky" }}>
			<div className="container p-0">
				<Link to="/books" className="navbar-brand">
					LIBRARY MANAGEMENT
				</Link>
				<div className="d-flex justify-content-center align-items-center text-center" id="navbarSupportedContent">
					<Link className="nav-link me-4" to="/dashboard">
						DASHBOARD
					</Link>
					<Link className="nav-link" to="/library">
						LIBRARY
					</Link>
					
				</div>
			</div>
			
		</nav>
	);
}

export default Navigation;