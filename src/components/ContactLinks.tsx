
import Image from "next/image";
import ic_phone from "../assets/images/ic_phone.png";
import ic_gmail from "../assets/images/ic_gmail.png";
import ic_linkedln from "../assets/images/ic_linkedln.png";
import ic_fb from "../assets/images/ic_facebook.png";
import ic_github from "../assets/images/ic_github.png";
export default function ContactLinks() {
  return (
    <div className="flex flex-row mt-2">
      <a href="http://zalo.me/0377899959">
        <Image
          className="rounded-full mx-3 md:mx-3 lg:mx-3 z-20 mt-5 shadow-xl hover:scale-125 transition duration-500 ease-in-out"
          src={ic_phone}
          alt="phone"
          width={55}
          height={55}
        />
      </a>

      <a href="mailto:phucvinhlp02@gmail.com">
        <Image
          className="rounded-full mx-3 md:mx-3 lg:mx-3 z-20 mt-5 shadow-xl hover:scale-125 transition duration-500 ease-in-out"
          src={ic_gmail}
          alt="mail"
          width={55}
          height={55}
        />
      </a>

      <a href="https://www.linkedin.com/in/nguyen-vinh-b53341273/">
        <Image
          className="rounded-full mx-3 md:mx-3 lg:mx-3 z-20 mt-5 shadow-xl hover:scale-125 transition duration-500 ease-in-out"
          src={ic_linkedln}
          alt="linkein"
          width={55}
          height={55}
        />
      </a>

      <a href="https://github.com/zink-ndp">
        <Image
          className="rounded-full mx-3 md:mx-3 lg:mx-3 z-20 mt-5 shadow-xl hover:scale-125 transition duration-500 ease-in-out"
          src={ic_github}
          alt="My picture"
          width={55}
          height={55}
        />
      </a>
      
      <a href="https://www.facebook.com/vinh.is.me">
        <Image
          className="rounded-full mx-3 md:mx-3 lg:mx-3 z-20 mt-5 shadow-xl hover:scale-125 transition duration-500 ease-in-out"
          src={ic_fb}
          alt="My picture"
          width={55}
          height={55}
        />
      </a>

    </div>
  );
}
