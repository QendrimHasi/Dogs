import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as DomeRoutes,
} from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SingleDogPage from "../pages/dog/SingleDogPage";

function Routes() {
  return (
    <Router>
      <DomeRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/dog/:id" element={<SingleDogPage />} />
        <Route path="*" element={<NotFound />} />
      </DomeRoutes>
    </Router>
  );
}

export default Routes;
