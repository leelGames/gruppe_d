import Content from "./Content.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import React from "react";

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
