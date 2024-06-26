// Importing packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Importing pages
import Home from "./pages/Home";
import ListingKitties from "./pages/ListingKitties";
import LovedKitties from "./pages/LovedKitties";

// Importing components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitties" element={<ListingKitties />} />
        <Route path="/loved-kitties" element={<LovedKitties />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
