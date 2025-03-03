import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/Layout.css";
import { Analytics } from "@vercel/analytics/react";

export default function Layout() {
  return (
    <div className="layout-wrapper">
      <Outlet />
      <Analytics />
    </div>
  );
}
