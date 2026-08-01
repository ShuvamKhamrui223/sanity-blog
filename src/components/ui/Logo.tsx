import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={"/icon-large.svg"}
          alt="logo"
          height={25}
          width={100}
          className=" hidden md:block"
        />
        <Image
          src={"/icon-small.svg"}
          alt="logo"
          height={25}
          width={25}
          className="invert block md:hidden"
        />
      </Link>
    </>
  );
}

export default Logo