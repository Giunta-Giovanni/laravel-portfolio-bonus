// importiamo la parte di gestione delle rotte da modulo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il layout
import ProjectLayout from "./layouts/ProjectLayout";
// importiamo le pagine
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SingleProjectPage from "./pages/SingleProjectPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProjectLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<SingleProjectPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

