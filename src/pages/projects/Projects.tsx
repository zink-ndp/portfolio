import { db } from "@/app/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Projects() {
  
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    (async() => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const docs: any = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setProjects(docs);
    })();
  },[])

  return (
    <>
      <div
        id="projects"
        className="w-[100%] z-30 flex flex-col items-center xl:mt-32 min-h-screen"
      >
        <p className="text-5xl z-30 text-blue-500 bold">My Projects</p>
        <div className="bg-white flex flex-col items-center justify-center shadow-xl rounded-xl p-10 mt-5 z-30 w-[100%] lg:w-[80%] xl:w-[65%]">
          {projects.map((proj:any) => {
            return (
              <>
                <div key={proj.id} className=" w-full flex flex-col mt-3">
                  <p className="text-sub bold">
                    {proj.type}
                    <a href={proj.link} target="_blank">
                      <button className=" float-right bg-transparent border-2 border-blue-500 text-sm text-blue-500 px-3 py-2 rounded-md">
                      <span className=" relative flex h-3 w-3 float-right -mr-4 -mt-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-300"></span>
                      </span>
                        Github
                      </button>
                    </a>
                  </p>
                  <p className="text-sub bold">
                    Name:
                    <span className="text-content  font-normal">
                      {" "}
                      {proj.name}
                    </span>{" "}
                    <span className=" float-right"> ({proj.time})</span>
                  </p>
                  <p className="text-sub bold">
                    Description:
                    <span className="text-content  font-normal text-justify">
                      {" "}
                      {proj.desc}
                    </span>
                  </p>
                  <p className="text-sub bold">
                    Technologies:
                    <span className="text-content  font-normal text-justify">
                      {" "}
                      {proj.techs}
                    </span>
                  </p>
                  <p className="text-sub bold">
                    Responsibilities:
                    <span className="text-content  font-normal text-justify">
                      {" "}
                      {proj.resp}
                    </span>
                  </p>
                </div>
                <div className="border-t-2 border-blue-100 w-[14rem] mt-3"></div>
              </>
            );
          })}
          <p className="mt-5 text-lg italic bold text-sub">And many more...</p>
        </div>
      </div>
      {/* <ButtonScrollDown id="contacts" text="Contact Me" /> */}
    </>
  );
}
