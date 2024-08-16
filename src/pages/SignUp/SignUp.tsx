import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, IconButton, FormControl, InputAdornment, FormHelperText } from "@mui/material";
import SignUpSchema from "./SignUpSchema";
import { signUpStart } from "./services";
import { LayoutAbstract } from "@/components/organism";
import { Button, Input, Text, Title } from "@/components/elements";
import { SnackbarContext } from "@/contexts/Snackbar";
import * as S from "./SignUpStyled";

export const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setSnackbar } = useContext(SnackbarContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ email, name, password }) => {
      await signUpStart({
        name,
        email,
        password,
        setLoading,
        setSnackbar,
      });
    },
    validationSchema: SignUpSchema,
  });
  const { values, touched, errors, handleSubmit, handleChange, setFieldValue } = formik;

  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [passwordConfirmShow, setPasswordConfirmShow] = useState<boolean>(false);

  return (
    <LayoutAbstract>
      <S.Form onSubmit={handleSubmit}>
        <S.ContainerText>
          <Title size="3.2">Crie uma conta</Title>
          <Text>Faça o registro com sua conta e comece a experiência</Text>
        </S.ContainerText>

        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <Input
            id="name"
            placeholder="Nome"
            value={values.name}
            onChange={handleChange}
            aria-describedby="name"
            helperText={touched.name && errors.name}
            error={touched.name && Boolean(errors.name)}
            inputProps={{ style: { fontSize: "1.4rem" }, autocomplete: "name" }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <Input
            id="email"
            value={values.email}
            placeholder="E-mail"
            onChange={handleChange}
            aria-describedby="email"
            inputProps={{ style: { fontSize: "1.4rem" }, autocomplete: "email" }}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            onKeyUp={() => {
              setFieldValue("email", values.email.replace("/s/g", ""));
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <S.ContainerInput error={formik.touched.password && Boolean(formik.errors.password)}>
            <S.ContainerPassword>
              <Input
                id="password"
                variant="outlined"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                typeElement={TextField}
                type={`${passwordShow ? "text" : "password"}`}
                error={touched.password && Boolean(errors.password)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={() => setPasswordShow(!passwordShow)}
                    >
                      {passwordShow ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{
                  autocomplete: "password",
                  style: { fontSize: "1.4rem" },
                }}
              />
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setPasswordShow(!passwordShow)}
                edge="end"
              >
                {passwordShow ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </S.ContainerPassword>
          </S.ContainerInput>
          {touched.password && Boolean(errors.password) && (
            <FormHelperText>{touched.password && errors.password}</FormHelperText>
          )}
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <S.ContainerInput error={formik.touched.password && Boolean(formik.errors.password)}>
            <S.ContainerPassword>
              <Input
                variant="outlined"
                id="confirmPassword"
                onChange={handleChange}
                typeElement={TextField}
                placeholder="Confirma Senha"
                value={values.confirmPassword}
                inputProps={{ style: { fontSize: "1.4rem" } }}
                type={`${passwordConfirmShow ? "text" : "password"}`}
                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={() => setPasswordConfirmShow(!passwordConfirmShow)}
                    >
                      {passwordConfirmShow ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <IconButton
                aria-label="toggle Confirm Password visibility"
                onClick={() => setPasswordConfirmShow(!passwordConfirmShow)}
                edge="end"
              >
                {passwordConfirmShow ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </S.ContainerPassword>
          </S.ContainerInput>
          {touched.confirmPassword && Boolean(errors.confirmPassword) && (
            <FormHelperText>{touched.confirmPassword && errors.confirmPassword}</FormHelperText>
          )}
        </FormControl>
        <S.ContainerButtons>
          <Button size="large" type="submit" loading={loading} disabled={loading}>
            Cadastrar-se
          </Button>
        </S.ContainerButtons>
        <S.Footer>
          <Text>Já possui uma conta?</Text>
          <S.Link className="link" onClick={() => navigate("/")}>
            Login
          </S.Link>
        </S.Footer>
      </S.Form>
    </LayoutAbstract>
  );
};
