// Home page
import HomePage from "@/features/home/pages/HomePage";

// Layouts
import RootLayout from "@/shared/layouts/RootLayout.jsx";

// Profile pages
import ProfilePage from "@/features/profile/pages/ProfilePage";

// Router
import { Route, Navigate, Routes as RoutesWrapper } from "react-router-dom";

const Routes = () => {
  return (
    <RoutesWrapper>
      {/* Public routes */}
      <Route path="/" element={<HomePage />} />

      {/* Protected routes */}
      <Route element={<RootLayout />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </RoutesWrapper>
  );
};

export default Routes;
