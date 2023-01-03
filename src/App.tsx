import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AboutPage from "./AboutPage/AboutPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/artesdajackeline" element={<Home />}/>
				<Route path="/about" element={<AboutPage />}/>
			</Routes>
		</div>
	);
}

export default App;