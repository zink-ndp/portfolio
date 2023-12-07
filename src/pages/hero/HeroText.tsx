/* eslint-disable react/no-unescaped-entities */
import ButtonSolid from "../../components/ui/ButtonSolid";
import ButtonOutlined from "../../components/ui/ButtonOutlined";
import ContactLinks from "../../components/ContactLinks";

export default function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start sm:items-center z-10">
      <p className=" text-lg text-gray-900 mt-4 ml-3">HELLO</p>
      <p className=" text-4xl lg:text-5xl sm:text-4xl bold text-black mt-5 ml-3">
        I'm Phuc Vinh
      </p>
      <p className=" text-3xl lg:text-4xl sm:text-2xl text-black mt-5 ml-3">
        Fresher Front-End Dev.
      </p>
      <div className="flex flex-col justify-center items-center lg:items-start">
        <div className="flex flex-row mt-2">
          {/* <ButtonSolid onClick lref="#contacts" text="Contact me" /> */}
          <ButtonOutlined
            target="_blank"
            lref="https://drive.google.com/file/d/1qFBNTkVnM-PhXC7wcdhO66FRIywUy6aj/view?usp=drive_link"
            text="Download CV"
          />
        </div>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1ZQZGGTsJ0gdWnzl6SRkW8mDmFpyW5gNn/view?usp=drive_link"
          className="mt-5 lg:ml-3 text-blue-500 bold underline hover:text-blue-800 hover:scale-105 transition ease-in-out duration-500"
        >
          Download Vietnamese Ver
        </a>
      </div>
      <ContactLinks />
    </div>
  );
}
