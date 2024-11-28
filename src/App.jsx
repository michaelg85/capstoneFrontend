import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import OneVOne from "./pages/OneVOne";
import Search from "./pages/Search";
import Help from "./pages/Help";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        
        <Route path="/" element={<OneVOne />} />
        {/* <Route path="/oneVOne" element={<OneVOne />} />  */}
        <Route path="/search" element={<Search />} />
        <Route path="/help" element={<Help />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/list" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
