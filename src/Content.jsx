import React, { useState } from 'react';

function Content() {
	const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
		
		console.log(count);
    };

	return (
		<main className="flex-grow">
			<div className="container mx-auto p-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="bg-gray-300 p-4">{count}</div>
					<div className="bg-gray-400 p-4">Spalte 2</div>
					<div className="bg-gray-500 p-4">
						<button 
                      	  className="bg-gray-500 text-white p-2 rounded"
                      	  onClick={incrementCount}
                    	>Erhöhen</button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Content;
