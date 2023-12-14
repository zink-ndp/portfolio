/* eslint-disable @next/next/no-async-client-component */
"use client";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const docs: any = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setProjects(docs);
    })();
  }, []);

  return (
    <div className="flex flex-1 flex-col space-y-6 bg-white">
      {projects.map((proj: any) => {
        return (
          <>
            <div
              key={proj.id}
              className="bg-white p-3 shadow-md flex flex-col rounded-lg"
            >
              <input
                type="text"
                className="text-black inline p-3 border-b-2"
                value={proj.type}
              />
              <input
                type="text"
                className="text-black inline p-3 border-b-2"
                value={proj.name}
              />
              <input
                type="text"
                className="text-black inline p-3 border-b-2"
                value={proj.desc}
              />
              <input
                type="text"
                className="text-black inline p-3 border-b-2"
                value={proj.resp}
              />
              <input
                type="text"
                className="text-black inline p-3 border-b-2"
                value={proj.techs}
              />
              <input
                type="text"
                className="text-black inline p-3 border-b-2"
                value={proj.time}
              />
              <button className=" mt-3 p-3 bg-blue-500 hover:bg-blue-300 text-white rounded-lg bold w-[100px]">
                Modify
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}
