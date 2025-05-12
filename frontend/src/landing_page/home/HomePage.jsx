import Pricing from "./Pricing";
import Hero from "./Hero";
import Stats from "./Stats";
import Education from "./Education";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OpenAccount from "../OpenAccount";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePage(){

    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
            navigate("/login");
        }
        const { data } = await axios.post(
            "http://localhost:3002",
            {},
        { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);
        return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };


    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

    return(
        <>
        <Hero/>
        <Stats/>
        <Pricing/>
        <Education/>
        {/* <Awards/> */}
        <OpenAccount/>
       <ToastContainer />
        </>
    );
}