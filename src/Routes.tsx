import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { TermsOfUse } from "./pages/TermsOfUse";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/LNBits" element={<Home />} />
        <Route path="/LNBits/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}
