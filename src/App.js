import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./router-pages/Home";
import About from "./router-pages/About";
import Contact from "./router-pages/Contact";
import NotFound from "./router-pages/NotFound";
import UserProfile from "./router-pages/UserProfile";
import Dashboard from "./router-pages/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<p>Welcome to the dashboard</p>} />
            <Route path="account" element={<p>Your account</p>} />
            <Route path="settings" element={<p>Your settings</p>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
