import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-provider";
import DashboardLayout from "./Layout/dashboard/Index";
import Dashboard from "./views/dashboard/Index";
import CreateFeedback from "./views/create-feedback/Index";
import AllFeedbacks from "./views/all-feedback/Index";
import CreateOffer from "./views/create-offers/Index";
import AllOffers from "./views/all-offers/Index";
import UserFeedbackForm from "./views/user-feedback-form/Index";
import { Toaster } from "react-hot-toast";

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
          <Route path="/:company/:id/feedback" element={<UserFeedbackForm />} />
        </Routes>
      </AuthProvider>
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "24px" }}
        toastOptions={{
          success: {
            duration: 6000,
            style: {
              border: "1.5px solid #38BB5C",
            },
          },
          error: {
            duration: 7000,
            style: {
              border: "1.5px solid #FC6161",
            },
          },
          style: {
            fontFamily: "Outfit",
            fontWeight: "400",
            fontSize: "13.5px",
            maxWidth: "460px",
            padding: "12px 16px",
            backgroundColor: "#F2FFF5",
            color: "#666",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
