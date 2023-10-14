import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-provider";
import DashboardLayout from "./Layout/dashboard/Index";
import Dashboard from "./views/dashboard/Index";
import CreateFeedback from "./views/create-feedback/Index";
import AllFeedbacks from "./views/all-feedback/Index";
import CreateOffer from "./views/create-offers/Index";
import AllOffers from "./views/all-offers/Index";
import UserFeedbackForm from "./views/user-feedback-form/Index";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-feedback" element={<CreateFeedback />} />
            <Route path="/all-feedbacks" element={<AllFeedbacks />} />
            <Route path="/create-offers" element={<CreateOffer />} />
            <Route path="/all-offers" element={<AllOffers />} />
          </Route>
          <Route path="/feedback" element={<UserFeedbackForm />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
