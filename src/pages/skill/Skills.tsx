import Image from "next/image";
import ButtonScrollDown from "@/components/ui/ButtonScrollDown";

import img_techs from "../../assets/images/img_techs.jpg";
import ic_html from "../../assets/images/ic_skills/ic_html.png";
import ic_css from "../../assets/images/ic_skills/ic_css.png";
import ic_js from "../../assets/images/ic_skills/ic_js.png";
import ic_ts from "../../assets/images/ic_skills/ic_ts.png";
import ic_php from "../../assets/images/ic_skills/ic_php.png";
import ic_msql from "../../assets/images/ic_skills/ic_msql.png";
import ic_dbdiagram from "../../assets/images/ic_skills/ic_dbdiagram.png";
import ic_dfddiagram from "../../assets/images/ic_skills/ic_dfddiagram.png";
import ic_react from "../../assets/images/ic_skills/ic_react.png";
import ic_next from "../../assets/images/ic_skills/ic_next.png";
import ic_bootstrap from "../../assets/images/ic_skills/ic_bootstrap.png";
import ic_tailwind from "../../assets/images/ic_skills/ic_tailwind.png";

const imgList = [
  {id: 1, link: ic_html, alt: "html" },
  {id: 2, link: ic_css, alt: "css" },
  {id: 3, link: ic_js, alt: "js" },
  {id: 4, link: ic_ts, alt: "ts" },
  {id: 5, link: ic_bootstrap, alt: "bootstrap" },
  {id: 6, link: ic_php, alt: "php" },
  {id: 7, link: ic_msql, alt: "msql" },
  {id: 8, link: ic_react, alt: "react" },
  {id: 9, link: ic_next, alt: "next" },
  {id: 10, link: ic_tailwind, alt: "tailwind" },
  {id: 11, link: ic_dbdiagram, alt: "dbdiagram" },
  {id: 12, link: ic_dfddiagram, alt: "dfddiagram" },
];

export default function Skill() {
  return <>
    <div
      id="skills"
      className="w-[100%] z-30 flex flex-col items-center justify-center min-h-screen"
    >
      <p className="text-5xl z-30 text-blue-500 bold">Technical Skills</p>
      <div className="bg-white flex flex-row items-center justify-center shadow-xl rounded-xl mt-8 z-30 w-[100%] lg:w-[80%] xl:w-[65%]">
        <div className="hidden xl:block xl:flex-1 xl:h-full xl:w-[85%]">
          <Image
            className=" rounded-xl w-[85%] h-full object-cover"
            src={img_techs}
            alt="tech"
          />
        </div>
        <div className="flex-1 p-10">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-20">
            {imgList.map((img) => {
              return <Image className="animate-pulse" key={img.id} src={img.link} alt={img.alt} />;
            })}
          </div>
        </div>
      </div>
    </div>
    <ButtonScrollDown id="projects" text="My Projects"/>
  </>
}
