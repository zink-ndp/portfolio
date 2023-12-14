
export default function ProjectsList() {

    const projects = [
        {
          name: "Personal Portfolio",
          type: "Personal Project",
          time: "Still Developing",
          description: "A Front-End web show personal data, skills and projects",
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
    <div className="flex flex-1 flex-col space-y-6 bg-white">
          {projects.map((proj) => {
            return (
              <>
                <div className="bg-white p-3 shadow-md flex flex-col rounded-lg">
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
                    value={proj.description}
                  />
                  <input
                    type="text"
                    className="text-black inline p-3 border-b-2"
                    value={proj.responsibility}
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
                  <button className=" mt-3 p-3 bg-blue-500 hover:bg-blue-300 text-white rounded-lg bold w-[100px]">Modify</button>
                </div>
              </>
            );
          })}
        </div>
  )
}
