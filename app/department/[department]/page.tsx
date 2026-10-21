import Link from "next/link";
import departmentData from "@/data/departmentData";
import students from "@/data/studentData";
import StudentCard from "@/components/StudentCard";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return departmentData.map((d) => ({
    department: String(d.id),
  }));
}

async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department } = await params;
  const deptItem = departmentData.find(
    (d) => String(d.id) === String(department)
  );

  if (!deptItem) {
    notFound();
  }

  return (
    <div className="min-h-[85vh] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-slate-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link
            href="/department"
            className="hover:text-blue-600 font-medium transition-colors"
          >
            Departments
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-600 font-medium">{deptItem.department}</span>
          <span className="text-slate-300">/</span>
          <span className="font-semibold text-slate-900">{deptItem.name}</span>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <Link
            href="/department"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span aria-hidden="true">&larr;</span>
            <span>Return to {deptItem.department} Department</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            <span>View all students</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Main Details Card */}
        <div className="border border-slate-200/90 rounded-2xl p-6 sm:p-8 bg-white shadow-xs mb-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {deptItem.name}
                </h1>
                <span className="px-3 py-1 text-xs bg-indigo-50 text-indigo-700 border border-indigo-200/80 rounded-lg font-semibold">
                  Specialization under {deptItem.department}
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                {deptItem.description}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end shrink-0 bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                DEPARTMENT TRACK
              </span>
              <div className="mt-1 px-3 py-1 rounded-lg text-sm font-mono font-bold text-slate-800 bg-white border border-slate-200">
                {deptItem.code}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 my-6"></div>

          {/* 4 Detail Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                Academic Lead
              </span>
              <span className="text-sm font-bold text-slate-900 block mt-1.5">
                {deptItem.academicLead || "Prof. Elena Vance"}
              </span>
            </div>

            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                Primary Core Lab
              </span>
              <span className="text-sm font-bold text-slate-900 block mt-1.5">
                {deptItem.primaryCoreLab || "Turing Hall 408"}
              </span>
            </div>

            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                Total Enrollment
              </span>
              <span className="text-sm font-bold text-slate-900 block mt-1.5">
                {deptItem.students.length} Active Enrollees
              </span>
            </div>

            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                Curriculum Cycle
              </span>
              <span className="text-sm font-bold text-slate-900 block mt-1.5">
                {deptItem.curriculumCycle || "2024–2025 Revised"}
              </span>
            </div>
          </div>
        </div>

        {/* Students Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex items-center gap-2.5">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Students in this Specialization
            </h2>
            <span className="px-2.5 py-0.5 text-xs bg-slate-100 text-slate-700 font-bold rounded-lg border border-slate-200">
              {deptItem.students.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-slate-500">Filtered by Track:</span>
            <span className="px-2.5 py-1 text-xs bg-indigo-50 text-indigo-700 border border-indigo-200/80 rounded-lg font-semibold">
              {deptItem.name}
            </span>
          </div>
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {deptItem.students.map((sid) => {
            const studentObj = students.find((s) => s.id === sid);
            if (!studentObj) return null;
            return <StudentCard key={studentObj.id} student={studentObj} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DepartmentDetailPage;