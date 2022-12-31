import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

interface RoutesProps {
  user: object;
}

const Routes = () => {
  const { user } = useContext(AuthContext) as RoutesProps;
  const signed = !!user;

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
