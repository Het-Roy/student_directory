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
    <div className="group bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-sm shadow-blue-500/20">
            {student.initials}
          </div>
          <div className="px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 text-xs font-mono font-semibold text-slate-600">
            {student.studentId}
          </div>
        </div>

        <div className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
          {student.name}
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 max-w-[65%] truncate">
            {student.department}
          </div>
          <div className="text-xs font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
            {student.studyYear}
          </div>
        </div>
      </div>

      <Link
        className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
        href={`/studentData/${student.id}`}
      >
        <span>View Details</span>
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  );
}
