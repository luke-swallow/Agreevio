import './App.css';
import { Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import SearchAgreements from "./pages/searchAgreements";
import AnaylzeAgreement from "./pages/anaylzeAgreement";

function App() {
  return (
    
    <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<SearchAgreements />} />
        <Route path="searchAgreements" element={<SearchAgreements />} />
        <Route path="anaylzeAgreement" element={<AnaylzeAgreement />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
       
    </div>
  );
}

export default App;
