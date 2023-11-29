import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/HomePage/Home";

export default function RoutingComponent() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
