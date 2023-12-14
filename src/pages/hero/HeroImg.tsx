import Image from "next/image";
import myImg from "../../assets/images/img_me.jpg";
import Link from "next/link";

export default function HeroImg() {
  return (
    <Link
      href="/login">
      <Image
        className="rounded-full z-20 shadow-2xl  hover:cursor-default"
        src={myImg}
        alt="My picture"
        width={400}
        height={400}
      />
    </Link>
  );
}
