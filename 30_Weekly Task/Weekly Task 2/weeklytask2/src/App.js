import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deployment from "./pages/Deployment";
import EventHandling from "./pages/EventHandling";
import Redux from "./pages/GlobalStateManagementAndDataFetching";
import Introduction from "./pages/IntroductionReact";
import ReactForm from "./pages/ReactForm";
import ReactFundamental from "./pages/ReactFundamental";
import ReactHook from "./pages/ReactHook";
import ReactRouting from "./pages/ReactRouting";
import Testing from "./pages/Testing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Introduction-React" element={<Introduction />} />
          <Route path="/React-Fundamental" element={<ReactFundamental />} />
          <Route path="/React-Routing" element={<ReactRouting />} />
          <Route path="/Event-Handling" element={<EventHandling />} />
          <Route path="/React-Hook" element={<ReactHook />} />
          <Route path="/React-Form" element={<ReactForm />} />
          <Route
            path="/Global-State-Management-and=Data-Fetching"
            element={<Redux />}
          />
          <Route path="/Testing" element={<Testing />} />
          <Route path="/Deployment" element={<Deployment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
