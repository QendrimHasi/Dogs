import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as DomeRoutes,
} from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SingleDogPage from "../pages/dog/SingleDogPage";
import DefaultLayout from "../components/layout/Default";

function Routes() {
  return (
    <Router>
      <DomeRoutes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/dog/:id"
          element={
            <DefaultLayout>
              <SingleDogPage />
            </DefaultLayout>
          }
        />
        <Route
          path="*"
          element={
            <DefaultLayout>
              <NotFound />
            </DefaultLayout>
          }
        />
      </DomeRoutes>
    </Router>
  );
}

export default Routes;
