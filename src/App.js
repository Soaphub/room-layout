import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Upper from "./Components/Upper";
import Footer from "./Components/Footer";
import "./styles/content.css"

function App() {
	return (
		<div className="container-fluid full-content">
			<div className="row main">
				<Upper/>
			</div>
			<div className="row footer">
				<Footer/>
			</div>
		</div>
	);
}

export default App;
