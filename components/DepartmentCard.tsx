import Image from "next/image";
import Link from "next/link";

export interface DepartmentType {
  id: number;
  department: string;
  name?: string;
  description: string;
  specializationCount: number;
  studentCount: number;
}

export default function DepartmentCard({
  department,
}: {
  department: DepartmentType;
}) {
  if (!department) return null;

  return (
    <div className="w-[90%] h-[12vw] pt-[1vw] border mb-[2vw] bg-white">
      <div className="w-[100%] h-[30%] flex gap-[1vw] pl-[2vw] items-center">
        <Image
          src={"/earthlogo.png"}
          alt="Earth Logo"
          className="w-[4%] border h-[100%] p-[0.5vw] bg-blue-200 rounded-[1vw]"
          width={300}
          height={300}
        />
        <div className="text-[1.5vw] font-bold">
          {department.department}
        </div>
      </div>
      <div className="w-[100%] h-[30%] flex">
        <p className="w-[80%] pl-[2.5vw] h-[100%] text-[1.2vw] flex text-gray-500 font-border items-center">
          {department.description}
        </p>
        <Link
          className="w-[20%] h-[100%] text-[1.3vw] flex font-bold justify-center text-blue-500 font-border items-center"
          href={`/department/${department.id}`}
        >
          {"View >"}
        </Link>
      </div>
      <div className="w-[100%] h-[30%] flex">
        <div className="w-[20%] flex justify-center gap-[1vw] items-center h-[100%]">
          <Image
            src={"/earthlogo.png"}
            alt="Earth Logo"
            className="w-[10%] border h-[50%] rounded-[1vw]"
            width={300}
            height={300}
          />
          <p className="text-[1vw]">
            {department.specializationCount} specialization
          </p>
        </div>
        <div className="w-[20%] flex justify-center gap-[1vw] items-center h-[100%]">
          <Image
            src={"/earthlogo.png"}
            alt="Earth Logo"
            className="w-[10%] border h-[50%] rounded-[1vw]"
            width={300}
            height={300}
          />
          <p className="text-[1vw]">
            {department.studentCount} Enrolled Students
          </p>
        </div>
      </div>
    </div>
  );
}
