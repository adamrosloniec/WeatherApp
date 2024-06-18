import React from "react"
import { createRoot } from "react-dom/client"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import App from "./App"

// Import tailwind
const tailwindStylesheet = document.createElement("link")
tailwindStylesheet.href =
  "https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css"
tailwindStylesheet.rel = "stylesheet"
document.head.appendChild(tailwindStylesheet)
const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App day="today" />} />
        <Route path="/tomorrow" element={<App day="tomorrow" />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
