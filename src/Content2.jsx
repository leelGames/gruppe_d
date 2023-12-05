import React from "react";

function Content2() {
	return (
		<main className="flex-grow">
			<div className="container mx-auto p-4">
				<Menu2 />
			</div>
		</main>
	);
}

var count = 0;

function incrementCount() {
	document.getElementById("count").innerHTML = ++count + "";	
}

function Menu2(){
	return(
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			<div className="bg-gray-300 p-4" id = "count">{count}</div>
			<div className="bg-gray-100 p-4 flex">
				ohne useState
			</div>
			<div className="bg-gray-100 relative">
				<button 
					className="bg-gray-500 text-white p-2 inset-0 w-full h-full" 
					onClick={incrementCount}
				>Erhöhen</button>
			</div>
		</div>
	)
}

export default Content2;
