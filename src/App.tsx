import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./Components/ui/Button";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
