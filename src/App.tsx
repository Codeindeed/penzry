import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./Components/ui/Button";
import { AuthProvider } from "./contexts/auth-provider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Button />} />
          <Route path="about" element={<h1>About</h1>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
