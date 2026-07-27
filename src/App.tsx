import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import GridField from "./components/GridField";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import ProjectDetailPage from "./components/ProjectDetailPage";

export default function App() {
  return (
    <>
      <GridField />
      <Nav />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}
