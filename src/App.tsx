import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-provider";
import DashboardLayout from "./Layout/dashboard/Index";
import Dashboard from "./views/dashboard/Index";
import CreateFeedback from "./views/create-feedback/Index";
import AllFeedbacks from "./views/all-feedback/Index";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-feedback" element={<CreateFeedback />} />
            <Route path="/all-feedbacks" element={<AllFeedbacks />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
