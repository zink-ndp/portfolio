import Edu from "./Edu";
import Summary from "./Summary";
import ButtonScrollDown from "@/components/ui/ButtonScrollDown";

export default function AboutMe() {
  return <>
    <div id="about" className="w-[100%] flex flex-col items-center justify-center min-h-screen">
      <p className="text-5xl z-20 text-blue-500 bold">About Me</p>
      <div className="bg-white flex flex-col p-10 lg:flex-row lg:space-x-5 md:flex-col sm:flex-col z-20 mt-5 shadow-xl rounded-xl w-[90%] xl:w-[60%] lg:w-[80%] md:w-[90%] lg:p-15 sm:p-10">
        <div className="flex-1">
          <p className="text-3xl  text-black bold">SUMMARY</p>
          <div className="border-t-4 border-blue-500 w-[14rem]"></div>
          <Summary />
        </div>
        <div className="flex-1 mt-5 lg:mt-0">
          <p className="text-3xl  text-black bold">EDUCATION</p>
          <div className="border-t-4 border-blue-500 w-[14rem]"></div>
          <Edu />
        </div>
      </div>
    </div>
    <ButtonScrollDown id="skills" text="Technical Skills" />
  </>
}
