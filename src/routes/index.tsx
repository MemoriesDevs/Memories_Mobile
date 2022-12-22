import React from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const signed = false;

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
