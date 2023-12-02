import "./App.css";

function App() {
	return (
		<>
			<div className="min-h-screen flex flex-col">
				<header className="bg-blue-500 text-white p-4">Header</header>

				<main className="flex-grow">
					<main className="flex-grow">
						<div className="container mx-auto p-4">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div className="bg-gray-300 p-4">Spalte 1</div>
								<div className="bg-gray-400 p-4">Spalte 2</div>
								<div className="bg-gray-500 p-4">Spalte 3</div>
							</div>
						</div>
					</main>
				</main>

				<footer className="bg-blue-500 text-white p-4">Footer</footer>
			</div>
		</>
	);
}

export default App;
