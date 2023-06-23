import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AboutPage from "./AboutPage/AboutPage";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Contacts from "./Contacts/Contacts";
import FrequentQuestions from "./FrequentQuestions/FrequentQuestions";
import Shop from "./Shop/Shop";
import ChangePassword from "./ChangePassword/ChangePassword";

const Context = React.createContext<any>(null);

function App() {
	const [isSideMenuOpen, setSideMenuOpen] = useState(false);
	return (
		<div className="App">
			<Context.Provider
				value={{ sideMenuOpen: { isSideMenuOpen, setSideMenuOpen } }}
			>
				<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
				<script>var Alert = ReactBootstrap.Alert;</script>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/artesdajackeline" element={<Home />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/signIn" element={<SignIn />} />
					<Route path="/signUp" element={<SignUp />} />
					<Route
						path="/frequentQuestions"
						element={<FrequentQuestions />}
					/>
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/shop" element={<Shop />} />
					<Route
						path="/changePassword"
						element={<ChangePassword />}
					/>
				</Routes>
			</Context.Provider>
		</div>
	);
}

export { Context };
export default App;
