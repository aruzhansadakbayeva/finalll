
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import ProductDetail from "./containers/ProductDetail";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element = {<Home />} />
                    <Route exact path="/catalog" element={<ProductListing />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/product/:productId" element={<ProductDetail />} />
                    <Route>404 Not Found!</Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
