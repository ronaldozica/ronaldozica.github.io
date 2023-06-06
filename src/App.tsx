import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AboutPage from "./AboutPage/AboutPage";
import SideMenu from "./SideMenu/SideMenu";
import "bootstrap/dist/css/bootstrap.min.css";

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

                <SideMenu />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/artesdajackeline" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Context.Provider>
        </div>
    );
}

export { Context };
export default App;
