
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
      <div className="flex flex-row mt-5">
        <ButtonSolid onClick lref="#contacts" text="Contact me" />
        <ButtonOutlined lref="https://drive.google.com/file/d/1siPBEQZPW3bba0Enh_8Vv5sWCoYurdrX/view?usp=sharing" text="Download CV" />
      </div>
      <ContactLinks/>
    </div>
  );
}
