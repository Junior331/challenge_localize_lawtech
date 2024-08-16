import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, IconButton, FormControl, InputAdornment } from "@mui/material";

import { signIn } from "./services";
import signInSchema from "./SignInSchema";
import { LayoutAbstract } from "@/components/organism";
import { Button, Input, Text, Title } from "@/components/elements";
import { SnackbarContext } from "@/contexts/Snackbar";
import * as S from "./SignInStyled";

export const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setSnackbar } = useContext(SnackbarContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ email, password }) => {
      await signIn({
        email,
        password,
        navigate,
        setLoading,
        setSnackbar,
      });
    },
    validationSchema: signInSchema,
  });
  const { values, touched, errors, handleSubmit, handleChange, setFieldValue } = formik;

  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  return (
    <LayoutAbstract>
      <S.Form onSubmit={handleSubmit}>
        <S.ContainerText>
          <Title size="3.2">Seja Bem vindo ao localize</Title>
          <Text>Faça login em sua conta e comece os cadastros</Text>
        </S.ContainerText>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <Input
            id="email"
            placeholder="E-mail"
            value={values.email}
            onChange={handleChange}
            aria-describedby="email"
            inputProps={{ style: { fontSize: "1.4rem" } }}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            onKeyUp={() => {
              setFieldValue("email", values.email.replace("/s/g", ""));
            }}
          />
        </FormControl>
        <S.ContainerInput error={formik.touched.password && Boolean(formik.errors.password)}>
          <S.ContainerPassword>
            <Input
              id="password"
              variant="outlined"
              placeholder="Senha"
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
                form: {
                  autocomplete: "off",
                },
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
        <S.ContainerButtons>
          <Button type="submit" size="large" loading={loading} disabled={loading}>
            Login
          </Button>
        </S.ContainerButtons>
        <S.Footer>
          <Text>Não tem uma conta?</Text>
          <S.Link className="link" onClick={() => navigate("/signup")}>
            Cadastrar-se
          </S.Link>
        </S.Footer>
      </S.Form>
    </LayoutAbstract>
  );
};
