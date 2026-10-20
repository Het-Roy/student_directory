import Link from "next/link";

export interface StudentType {
  id: number;
  initials: string;
  studentId: string;
  name: string;
  status: string;
  department: string;
  studyYear: string;
}

export default function StudentCard({ student }: { student: StudentType }) {
  if (!student) return null;

  return (
    <div className="w-[30%] p-[0.5vw] h-[17vw] rounded-[1vw] border bg-white">
      <div className="w-[100%] flex items-center justify-center gap-[15vw] h-[30%]">
        <div className="w-[10%] h-[70%] bg-blue-200 text-blue-700 flex justify-center items-center font-bold text-[1.1vw] rounded-[0.5vw]">
          {student.initials}
        </div>
        <div className="w-[25%] h-[50%] rounded flex items-center justify-center border text-[1vw]">
          {student.studentId}
        </div>
      </div>
      <div className="w-[100%] font-bold flex pl-[2vw] items-center h-[20%] text-[1.2vw]">
        {student.name}
      </div>
      <div className="w-[100%] gap-[4vw] flex pl-[2vw] items-center h-[20%]">
        <div className="w-[50%] h-[70%] rounded flex text-[1vw] text-blue-600 bg-blue-200 font-bold items-center justify-center">
          {student.department}
        </div>
        <div className="w-[40%] h-[80%] flex items-center justify-center font-bold text-[1vw]">
          {student.studyYear}
        </div>
      </div>
      <Link
        className="w-[100%] flex items-center pl-[2vw] border-t font-bold text-blue-600 mt-[1vw] h-[20%] text-[1.1vw]"
        href={`/studentData/${student.id}`}
      >
        {"View >"}
      </Link>
    </div>
  );
}
