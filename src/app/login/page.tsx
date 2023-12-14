"use client";
import { useState } from "react";
import Circle from "../../components/ui/Circle";
import {auth} from "../firebase"
import { useRouter } from "next/navigation";
import { handleLogin } from "../login/handleLogin"

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter()

  function handleSubmit(){
    handleLogin(auth, email, pass)
    console.log(localStorage.getItem("userEmail"))
    localStorage.getItem("userEmail") && (localStorage.getItem("userEmail")!="") ? (router.push('/edit')) : (router.replace('/'))
  };

  return (
    <>
      <main className=" scroll-smooth min-h-screen p-10 flex items-center justify-center bg-white">
        <div className="bg-white rounded-2xl w-[500px] p-10 shadow-xl z-30 flex flex-col items-center justify-center space-y-6">
          <p className="text-4xl text-blue-500 bold">Login</p>
          <input
            className="bg-white w-full border-2 border-blue-300 p-3 rounded-xl text-black"
            type="text"
            name="email"
            id="ipEmail"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="bg-white w-full border-2 border-blue-300 p-3 rounded-xl text-black"
            type="password"
            name="password"
            id="ipPw"
            placeholder="Password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={!email || !pass}
            className=" w-full bg-blue-500 hover:bg-blue-300 bold p-3 rounded-xl"
          >
            Login
          </button>
        </div>
      </main>
      <div className="fixed -top-96 -left-64 md:-left-32 ">
        <Circle />
      </div>
      <div className="fixed -bottom-64 -right-96 md:-right-32 ">
        <Circle />
      </div>
    </>
  );
}
