import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const loginSuccess: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const url = new URL(`http://localhost:3000/${router.asPath}`);
    const ss: string = String(url.searchParams.get("token"));
    console.log(url.searchParams.get("token"));
    localStorage.setItem("tokenURL", ss);
    router.push("/home");
  }, []);
  return <></>;
};

export default loginSuccess;
