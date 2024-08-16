import { Snackbar } from "@/contexts/Snackbar";
import { Dispatch, SetStateAction } from "react";

export type signUpProps = {
  name: string;
  email: string;
  password: string;
  setSnackbar: (snackbarData: Snackbar) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
