import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-[98vw] border h-[7vh] flex items-center bg-white text-black">
      <Link className="w-[17%] h-[100%]" href={"/"}>
        <Image
          src={"/logo.png"}
          className="w-[100%] h-[100%]"
          width={300}
          height={300}
          alt="Logo"
        />
      </Link>
      <div className="flex ml-[10vw] w-[40%] font-bold gap-[1vw] h-[100%]">
        <Link className="w-[100%] h-[100%]" href={"/"}>
          <div className="flex w-[100%] h-[100%] border-b-[0.2vw] border-blue-800 justify-center items-center">
            Students
          </div>
        </Link>
        <Link className="w-[100%] h-[100%]" href={"/department"}>
          <div className="flex w-[100%] h-[100%] border-b-[0.2vw] border-blue-800 justify-center items-center">
            Department
          </div>
        </Link>
        <Link className="w-[100%] h-[100%]" href={"/about"}>
          <div className="flex w-[100%] h-[100%] border-b-[0.2vw] border-blue-800 justify-center items-center">
            About
          </div>
        </Link>
      </div>
    </nav>
  );
}
