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
  const justLog = async () => {
    const loginUrl = "http://localhost:3001/login";
    const newWindow = window.open(loginUrl, "_blank", "width=500,height=600");
    // const res = await axios.get("http://localhost:3001/login");
    // const res = await axios("https://api.intra.42.fr/oauth/authorize?client_id=c091832985123223a91ae775a161dc2bf3e6dbc5bac6606131b8fa63101b0080&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauth%2Fintra-42%2Fredirect&response_type=code");
    // window.location(es.url);
    // console.log(res);
    // await axios.get("http://localhost:3001/login").then((res) => {
    // console.log(res);
    // router.push(res.url);
    // console.log(res.url);
  };

  return (
    <LoginStyle>
      <ContainerStyle>
        <ButtonStyle onClick={justLog}>Sign In</ButtonStyle>
      </ContainerStyle>
    </LoginStyle>
  );
}
