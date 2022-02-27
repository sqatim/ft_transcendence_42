import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Login from "../components/Login";
import api from "../utils/axios";

const Home: NextPage = () => {
  const router = useRouter();
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const getData = async () => {
      await api.get("http://localhost:3001/profile").then((res) => {
        if (res.data !== false) setCheck(true);
        console.log(res.data);
      });
    };
    getData();
  });
  return <div>{check === false ? <Login /> : null}</div>;
};

export default Home;
