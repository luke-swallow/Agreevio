import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Header from "./components/Header"
import SearchAgreements from "./pages/Search";
import AnaylzeAgreement from "./pages/Analyze";
import Footer from "./components/Footer"
import Results from './pages/Results';
import HomePage from './pages/HomePage';

import "./styles/Common.css";
import Enterprise from './pages/Enterprise';

// enterprise component needs to be by itself. 
// how do I do that

function App() {
  return (
    <div>
      
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchAgreements />} />
      <Route path="/analyze" element={<AnaylzeAgreement />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="result" element={<Results />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
