import axios from "axios";
import { signUpProps } from "./@types";
import { ENDPOINTS } from "@/utils/endpoints";

export const signUpStart = async ({ email, password, name, setLoading, setSnackbar }: signUpProps) => {
  const data = {
    name,
    email,
    password,
  };
  setLoading(true);
  try {
    await axios.post(`${ENDPOINTS.USER.SIGN_UP}`, data);
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
