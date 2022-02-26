import { useRouter } from "next/router";
import React, { useEffect } from "react";
import api from "../utils/axios";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      await api
        .get("http://localhost:3001/profile")
        .then((res) => {
          if(res.data === false)
              router.push("/login");
        })
    };
    getData();
    // console.log(getData);
  }, []);
  return <div>Home</div>;
}
