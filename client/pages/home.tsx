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
          console.log("kayne a sat");
        })
        .catch((err) => {
          console.log(err);
          setTimeout(() => {
            router.push("/404");
          }, 10000);
        });
      // console.log(profile);
      // return profile;
    };
    getData();
    // console.log(getData);
  }, []);
  return <div>Home</div>;
}
