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
    <div className="bg-white min-h-[85vh] text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
          <Link
            href="/department"
            className="hover:text-blue-600 transition-colors"
          >
            Departments
          </Link>
          <span>/</span>
          <span>{deptItem.department}</span>
          <span>/</span>
          <span className="font-semibold text-gray-900">{deptItem.name}</span>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/department"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span aria-hidden="true">&larr;</span>
            <span>Return to {deptItem.department} Department</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span>View all students</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Main Details Card Matching Screenshot */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-2xs mb-8">
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {deptItem.name}
                </h1>
                <span className="px-2.5 py-0.5 text-xs bg-indigo-50 text-indigo-700 border border-indigo-200/80 rounded font-medium">
                  Specialization under {deptItem.department}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {deptItem.description}
              </p>
            </div>

            <div className="flex flex-col items-end shrink-0">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                DEPARTMENT TRACK
              </span>
              <div className="mt-1 px-3 py-1 border border-gray-200 rounded text-sm font-semibold text-gray-800 bg-white">
                {deptItem.code}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 my-6"></div>

          {/* 4 Detail Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <span className="text-xs text-gray-500 block font-medium">
                Academic Lead
              </span>
              <span className="text-sm font-bold text-gray-900 block mt-1">
                {deptItem.academicLead || "Prof. Elena Vance"}
              </span>
            </div>

            <div>
              <span className="text-xs text-gray-500 block font-medium">
                Primary Core Lab
              </span>
              <span className="text-sm font-bold text-gray-900 block mt-1">
                {deptItem.primaryCoreLab || "Turing Hall 408"}
              </span>
            </div>

            <div>
              <span className="text-xs text-gray-500 block font-medium">
                Total Enrollment
              </span>
              <span className="text-sm font-bold text-gray-900 block mt-1">
                {deptItem.students.length} Active Enrollees
              </span>
            </div>

            <div>
              <span className="text-xs text-gray-500 block font-medium">
                Curriculum Cycle
              </span>
              <span className="text-sm font-bold text-gray-900 block mt-1">
                {deptItem.curriculumCycle || "2024–2025 Revised"}
              </span>
            </div>
          </div>
        </div>

        {/* Students Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-gray-900">
              Students in this Specialization
            </h2>
            <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 font-bold rounded">
              {deptItem.students.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Filtered by Track:</span>
            <span className="px-2.5 py-1 text-xs bg-indigo-50 text-indigo-700 border border-indigo-200/80 rounded font-medium">
              {deptItem.name}
            </span>
          </div>
        </div>

        {/* Student Cards Grid */}
        <div className="flex flex-wrap gap-4">
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