import React from "react";
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
