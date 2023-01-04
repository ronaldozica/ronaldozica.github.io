import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AboutPage from "./AboutPage/AboutPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
			<script>var Alert = ReactBootstrap.Alert;</script>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/artesdajackeline" element={<Home />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</div>
	);
}

export default App;