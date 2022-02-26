import React from "react";
import axios from "axios";
import Link from "next/link";
import { test } from "../utils/request";
import {
  LoginStyle,
  ContainerStyle,
  ButtonStyle,
} from "../styles/components/login/login.style";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
    <LoginStyle>
      <ContainerStyle>
        <Link href="http://localhost:3001/login">
          <ButtonStyle >Sign In</ButtonStyle>
        </Link>
      </ContainerStyle>
    </LoginStyle>
  );
}
