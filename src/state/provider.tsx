import React from "react";
import { SnackbarProvider } from "@/contexts/Snackbar";

type ProviderType = {
  children: React.ReactElement | React.ReactElement[];
};

const Provider: React.FC<ProviderType> = ({ children }) => {
  return <SnackbarProvider>{children}</SnackbarProvider>;
};

export default Provider;
