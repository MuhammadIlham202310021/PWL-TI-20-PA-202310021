import React from "react";
import { Routes, Route } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from "../modules/components/Homes/Home";
import Explore from "../modules/components/Explore/Explore";
import Messages from "../modules/components/Messages/Messages";
import Feeds from "../modules/components/Explore/widgets/Feeds";
import Reels from "../modules/components/Explore/widgets/Reels";
import FYP from "../modules/components/Explore/widgets/FYP";
import Profiles from "../modules/components/Profiles/Profiles";
import Login from "../modules/components/login/Login";
import NotFound from "../modules/components/Error/NotFound";

const routes = [
  { path: "", element: <Home /> },
  { path: "home", element: <Home /> },
  {
    path: "explore",
    element: <Explore />,
    children: [
      { path: "feeds", element: <Feeds /> },
      { path: "reels", element: <Reels /> },
      { path: "fyp", element: <FYP /> },
    ],
  },
  { path: "messages", element: <Messages /> },
  { path: "profile", element: <Profiles /> },
  { path: "login", element: <Login /> },
];

export default function AppRoute() {
  return (
    <Routes>
      <Route index element={<Login />} />
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Layouts>{route.element}</Layouts>}
        >
          {route.children?.map((child) => (
            <Route key={child.path} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

