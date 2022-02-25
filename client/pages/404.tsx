import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
const error: NextPage = () => {
  const router = useRouter();
  // useEffect(() => {
  // router.push("/login");
  // }, []);
  return <h1>401 Unauthorized</h1>;
};

export default error;
