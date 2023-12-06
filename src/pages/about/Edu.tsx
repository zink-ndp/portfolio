import Image from "next/image";
import ic_ctu from "../../assets/images/ic_ctu.png";

export default function Edu() {
  return <>
    <div className="flex flex-row justify-between md:justify-start px-8 space-x-10 p-5 mt-4">
      <div>
        <Image src={ic_ctu} alt="CTU" height={115} width={115} />
      </div>
      <div>
        <p className="text-title">Can Tho University</p>
        <p className="text-sub">(08/2020 - Now)</p>
        <p className="text-content">Major: Information System</p>
        <p className="text-content">GPA: 3.2</p>
      </div>
    </div>
  </>;
}
