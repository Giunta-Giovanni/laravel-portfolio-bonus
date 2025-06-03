// importiamo la parte di gestione delle rotte da modulo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il layout
import ProjectLayout from "./layouts/ProjectLayout";

// importiamo le pagine
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProjectLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

