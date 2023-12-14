import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddBox() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [resp, setResp] = useState("");
  const [techs, setTechs] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");

  async function handleAdd() {
    var randomId = ""
    randomId += Math.random()
    await setDoc(doc(db, "projects",randomId.toString()), {
        type: type,
        name: name,
        desc: desc,
        resp: resp,
        techs: techs,
        time: time,
        link: link
      });
      setType("")
      setName("")
      setDesc("")
      setResp("")
      setTechs("")
      setTime("")
      setLink("")
      toast.success('Congratulation! Project Added', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    window.location.reload()
  }

  return <>
  <ToastContainer></ToastContainer>
    <div className="flex flex-1 flex-col space-y-6 p-5 rounded-lg shadow-lg">
      <input
        type="text"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
        className="text-black inline p-3 border-b-2"
        placeholder="Type"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="text-black inline p-3 border-b-2"
        placeholder="Name "
      />
      <input
        type="text"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        className="text-black inline p-3 border-b-2"
        placeholder="Descr"
      />
      <input
        type="text"
        value={resp}
        onChange={(e) => {
          setResp(e.target.value);
        }}
        className="text-black inline p-3 border-b-2"
        placeholder="Responsibilities"
      />
      <input
        type="text"
        value={techs}
        onChange={(e) => {
          setTechs(e.target.value);
        }}
        className="text-black inline p-3 border-b-2"
        placeholder="Techs"
      />
      <input
        type="text"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
        className="text-black inline p-3 border-b-2"
        placeholder="Time"
      />
      <input
        type="text"
        value={link}
        onChange={(e) => {
          setLink(e.target.value);
        }}
        className="text-black inline p-3 border-b-2"
        placeholder="Link"
      />
      <button
        onClick={handleAdd}
        className=" mt-3 p-3 bg-blue-500 hover:bg-blue-300 text-white rounded-lg bold w-[100px]"
      >
        Add
      </button>
    </div>
  </>

}
