import Image from "next/image";
import myImg from '../../assets/images/img_me.jpg'

export default function HeroImg() {
  return (
    <Image
      className="rounded-full z-20 shadow-2xl "
      src={myImg}
      alt="My picture"
      width={400}
      height={400}
    />
  );
}
