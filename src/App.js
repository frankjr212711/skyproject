import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { CareersPage } from "./pages/careers";


import { SkywalkerPage } from "./pages/skywalker";
import { GJRPage } from "./pages/gjr";
import { LibrexPage } from "./pages/librex";

function App() {
  return (
    <>
      <Router>

        {/* <Home /> */}

        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/about" Component={AboutPage} exact />
          <Route path="/contact" Component={ContactPage} exact />
          <Route path="/careers" Component={CareersPage} exact />
          <Route path="/skywalker" Component={SkywalkerPage} exact />
          <Route path="/gjr" Component={GJRPage} exact />
          <Route path="/librex" Component={LibrexPage} exact />
        </Routes>
      
      </Router>
    </>
  );
}

export default App;
