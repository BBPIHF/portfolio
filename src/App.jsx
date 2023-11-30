import Allcomponents from "./Pages/Allcomponents";
import Resume from "./Pages/Resume";
import Letter from "./Pages/Letter";
import { Route, Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Allcomponents />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/letter" element={<Letter />} />
    </Routes>
  );
}
