import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/searched/:search" element={<Searched/>} />
          <Route path="/recipe/:name" element={<Recipe/>}/>


        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;