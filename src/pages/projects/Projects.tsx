import ButtonScrollDown from "@/components/ui/ButtonScrollDown";
import ButtonSolid from "@/components/ui/ButtonSolid";

export default function Projects() {
  const projects = [
    {
      name: "Personal Portfolio",
      type: "Personal Project",
      time: "Still Developing",
      description:
        "A Front-End web show personal data, skills and projects",
      techs: "ReactJS, NextJS, TypeScript, TailwindsCSS",
      responsibility: "building personal portfolio web",
      link: "https://github.com/zink-ndp/portfolio",
    },
    {
      name: "Interior Store Management System",
      type: "Personal Project",
      time: "08/2023 - 11/2023",
      description:
        "A fullstack web includes sales pages to display products, orders,… and management page for revenue statistics, CRUD data.",
      techs: "HTML, CSS, JS, Bootstrap, jQuery, PHP, MySQL",
      responsibility: "building fullstack webapp",
      link: "https://github.com/zink-ndp/zinkorra",
    },
    {
      name: "Taxi Booking (GIS)",
      type: "Group Project",
      time: "09/2023 - 11/2023",
      description:
        "A web system includes sales pages to book a car, rate a driver … and management page for revenue statistics, view drivers/cars state, CRUD data.",
      techs: "HTML, CSS, JS, Bootstrap, jQuery, PHP, MySQL, RestAPI",
      responsibility:
        "leader; mentoring on drawing system diagram and database diagram; mentoring member on coding; car booking function; UI/UX building and styling UI/UX; restAPI from Nominatim, GGMaps API; simulating cars location state, estimating distance and price of the trip ",
      link: "https://github.com/zink-ndp/taxi",
    },
    {
      name: "Noodle Sales Management System",
      type: "Group Project",
      time: "09/2023 - 11/2023",
      description:
        "A web system includes sales pages to display products, orders,… and management page for revenue statistics, CRUD data.",
      techs: "HTML, CSS, JS, Bootstrap, jQuery, PHP, MySQL",
      responsibility:
        "member; drawing system diagram, database diagram; building UI/UX; CRUD products information, CRUD promotions, apply promotion to an invoice, and other user interactions",
      link: "https://github.com/NDMTP/Atadi",
    },
  ];
  return (
    <>
      <div
        id="projects"
        className="w-[100%] z-30 flex flex-col items-center xl:mt-32 min-h-screen"
      >
        <p className="text-5xl z-30 text-blue-500 bold">My Projects</p>
        <div className="bg-white flex flex-col items-center justify-center shadow-xl rounded-xl p-10 mt-5 z-30 w-[100%] lg:w-[80%] xl:w-[65%]">
          {projects.map((proj) => {
            return (
              <>
                <div key={proj.name} className=" w-full flex flex-col mt-3">
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
                      {proj.description}
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
                      {proj.responsibility}
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
