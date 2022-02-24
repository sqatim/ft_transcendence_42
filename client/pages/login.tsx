import React from "react";
import {
  LoginStyle,
  ContainerStyle,
  ButtonStyle,
} from "../styles/components/login/login.style";

export default function Login() {
  const justLog = (): void => {
    console.log("kayne a deri");
  };
  return (
    <LoginStyle>
      <ContainerStyle>
        <ButtonStyle onClick={justLog}>Sign In</ButtonStyle>
      </ContainerStyle>
    </LoginStyle>
  );
}
