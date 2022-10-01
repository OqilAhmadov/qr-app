import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import App from "./App";

const Home = lazy(() => import("./pages/AttendanceList"));
const Events = lazy(() => import("./pages/Events"));
const Registration = lazy(() => import("./pages/RegistrationQR"));
const AttendanceList = lazy(() => import("./pages/AttendanceList"));
const Settings = lazy(() => import("./pages/Settings"));
const Login = lazy(() => import("./pages/LoginPage"));

const routes = [
  { path: "", element: Home },
  { path: "/registration", element: Registration },
  { path: "/attendanceList", element: AttendanceList },
  { path: "/settings", element: Settings },
  { path: "/login", element: Login },
];

const RoutesContainer = () => (
  <Router>
    <App>
      <Layout>  
        <Routes>
          {routes.map((route, key) => {
            const RouteComponent = route.element;
            return <Route key={key} path={route.path} element={<RouteComponent />} />;
          })}
        <Route path="/events" element={<Events />} />
        </Routes>
      </Layout>
    </App>
  </Router>
);

export default RoutesContainer;
