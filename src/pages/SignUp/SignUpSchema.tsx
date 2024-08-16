import * as yup from "yup";

const signUpSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Senha inválida, deve ter 8 dígitos")
    .matches(/[a-z]/, "Pelo menos um caractere minúsculo")
    .matches(/[A-Z]/, "Pelo menos um caractere maiúsculo")
    .required("O campo Senha é obrigatório"),
  name: yup.string().min(3, "Nome Inválido, deve ter 3 ou mais caracteres").required("O campo Nome é obrigatório."),
  email: yup.string().email("E-mail inválido.").required("O campo E-mail é obrigatório."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], `As senhas não são iguais.`)
    .required("O campo Confirma senha é obrigatório."),
});
export default signUpSchema;
