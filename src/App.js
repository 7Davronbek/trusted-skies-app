import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Places from "./components/Places";
import Reviews from "./components/Reviews";
import Skylux from "./components/Skylux";
import Subscribe from "./components/Subscribe";
import Towns from "./components/Towns";
import About from "./pages/About";
import Business from "./pages/Business";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Result from "./pages/Result";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Navbar" element={<Navbar />} />
                    <Route path="/Header" element={<Header />} />
                    <Route path="/Towns" element={<Towns />} />
                    <Route path="/Skylux" element={<Skylux />} />
                    <Route path="/Reviews" element={<Reviews />} />
                    <Route path="/Subscribe" element={<Subscribe />} />
                    <Route path="/Places" element={<Places />} />
                    <Route path="/Footer" element={<Footer />} />
                    <Route path="/Loader" element={<Loader />} />
                    <Route path="/Business" element={<Business />} />
                    <Route path="/Offers" element={<Offers />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contacts" element={<Contacts />} />
                    <Route path="/Result" element={<Result />} />
                </Routes>
                {/* <Places /> */}
                <Footer />
                <ScrollToTop />
            </Router>
        </>
    );
}

export default App;
