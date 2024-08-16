import { Snackbar } from "@/contexts/Snackbar";
import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

export type signInProps = {
  email: string;
  password: string;
  navigate: NavigateFunction;
  setSnackbar: (snackbarData: Snackbar) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
