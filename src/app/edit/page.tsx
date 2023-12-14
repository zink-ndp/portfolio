"use client";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import ProjectsList from "../edit/ProjectsList"
import AddBox from "../edit/AddBox"

export default function Edit() {
  const router = useRouter();
  function logOut() {
    signOut(auth).then(() => {
      localStorage.removeItem("userEmail");
      router.replace("/");
    });
  }

 
  return (
    <>
      <div className="w-full bg-white p-10 flex flex-col-reverse space-y-6 lg:flex-row lg:space-x-6">
        <ProjectsList></ProjectsList>
        <AddBox></AddBox>
      </div>
        <button className="fixed bottom-10 right-10">
          <p onClick={logOut} className="text-red-500 bold">
            Log Out
          </p>
        </button>
    </>
  );
}
