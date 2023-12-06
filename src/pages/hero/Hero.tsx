import HeroText from "./HeroText";
import HeroImg from "./HeroImg";
import ButtonScrollDown from "@/components/ui/ButtonScrollDown";

export default function Hero() {
  

  return (
    <>
      <div
        id="hero"
        className="flex w-[100%] mt-0 md:mt-4 sm:mt-3 min-h-screen flex-col justify-center lg:flex-row md:flex-col sm:flex-col lg:-mt-8 items-center md:justify-center sm:justify-center"
      >
        <HeroImg />
        <div className="flex flex-col justify-center lg:px-40 md:px-10 sm:px-0">
          <HeroText />
        </div>
      </div>
      <ButtonScrollDown id="about" text="About Me"/>
    </>
  );
}
