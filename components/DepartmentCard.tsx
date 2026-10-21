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
    <div className="group bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3.5">
            <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center p-2 shrink-0">
              <Image
                src="/earthlogo.png"
                alt="Department Icon"
                className="w-full h-full object-contain"
                width={48}
                height={48}
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {department.department}
              </h2>
              {department.name && (
                <p className="text-xs font-medium text-slate-400 mt-0.5">
                  {department.name}
                </p>
              )}
            </div>
          </div>

          <Link
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-100 transition-colors shrink-0"
            href={`/department/${department.id}`}
          >
            <span>View</span>
            <span className="transform group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </Link>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {department.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/70">
          <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center p-0.5">
            <Image
              src="/earthlogo.png"
              alt="Track"
              className="w-full h-full object-contain"
              width={16}
              height={16}
            />
          </div>
          <span>{department.specializationCount} Specializations</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/70">
          <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center p-0.5">
            <Image
              src="/earthlogo.png"
              alt="Students"
              className="w-full h-full object-contain"
              width={16}
              height={16}
            />
          </div>
          <span>{department.studentCount} Enrolled Students</span>
        </div>
      </div>
    </div>
  );
}
