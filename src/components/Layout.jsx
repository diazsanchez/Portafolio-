import React from "react";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <main className="layout-content">{children}</main>

      <footer className="layout-footer">
         {new Date().getFullYear()} Stephanie. Portafolio Estudiantil
      </footer>
    </div>
  );
}
