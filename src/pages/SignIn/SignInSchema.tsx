import * as yup from "yup";

const signInSchema = yup.object().shape({
  password: yup.string().min(8, "Senha inválida, deve ter 8 dígitos").required("O campo Senha é obrigatório"),
  email: yup.string().email("Invalid e-mail.").required("O campo e-mail é obrigatório"),
});
export default signInSchema;
