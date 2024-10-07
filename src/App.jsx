import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GsapTo from "./pages/GsapTo";
import GsapFrom from "./pages/GsapFrom";
import GsapFromTo from "./pages/GsapFromTo";
import GsapTimeline from "./pages/GsapTimeline";
import GsapStagger from "./pages/GsapStagger";
import GsapScrollTrigger from "./pages/GsapScrollTrigger";
import GsapText from "./pages/GsapText";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapFrom" element={<GsapFrom />} />
          <Route path="/gsaptext" element={<GsapText />} />
          <Route path="/gsapFromTo" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapsrolltrigger" element={<GsapScrollTrigger />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
