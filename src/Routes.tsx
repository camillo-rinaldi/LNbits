import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { TermsOfUse } from "./pages/TermsOfUse";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/LNBits" element={<Home />} />
        <Route path="/LNBits/terms-of-use" element={<TermsOfUse />} />
      </Routes>
      <RedirectHandler />
    </Router>
  );
}

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      navigate(redirect.replace(location.origin, ""));
    }
  }, [navigate]);

  return null;
}
