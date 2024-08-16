import { Navigate, Route, Routes } from "react-router-dom";
import {
  /* PLOP_ROUTE_IMPORT */
  SignIn,
  SignUp,
} from "@/pages";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* PLOP_INJECT_ROUTE */}
      <Route index element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
