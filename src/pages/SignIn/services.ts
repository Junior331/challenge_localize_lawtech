import axios from "axios";
import { signInProps } from "./@types";
import { ENDPOINTS } from "@/utils/endpoints";

export const signIn = async ({ email, password, navigate, setLoading, setSnackbar }: signInProps) => {
  const data = {
    email,
    password,
  };
  setLoading(true);
  try {
    await axios.post(`${ENDPOINTS.USER.SIGN_IN}`, data);
    return navigate("/lovemonster/clients");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    setSnackbar({
      isOpen: true,
      severity: "error",
      vertical: "bottom",
      horizontal: "left",
      message: error.response.data.message,
    });
    throw error;
  } finally {
    setLoading(false);
  }
};
