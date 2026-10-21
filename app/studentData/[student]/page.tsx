import Link from "next/link";
import studentData from "../../../data/studentData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return studentData.map((s) => ({
    student: String(s.id),
  }));
}

export default async function StudentProfilePage({
  params,
}: {
  params: Promise<{ student: string }>;
}) {
  const { student } = await params;
  const currentStudent = studentData.find(
    (s) => String(s.id) === String(student)
  );

  if (!currentStudent) {
    notFound();
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Back navigation */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>&larr;</span>
          <span>Back to Student Directory</span>
        </Link>
      </div>

      <div className="border border-slate-200/90 rounded-2xl bg-white shadow-xs overflow-hidden">
        {/* Profile Header */}
        <div className="p-6 sm:p-8 border-b border-slate-200/90 bg-gradient-to-r from-slate-50 via-white to-blue-50/40 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 text-2xl font-extrabold bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-md shadow-blue-500/20 flex justify-center items-center shrink-0">
            {currentStudent.initials}
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
              {currentStudent.name}
            </h1>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="px-3 py-1 rounded-lg bg-blue-50 text-xs font-mono font-bold text-blue-700 border border-blue-200/80">
                {currentStudent.studentId}
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {currentStudent.status}
              </span>
            </div>
          </div>
        </div>

        {/* Basic Info Grid */}
        <div className="p-6 sm:p-8 border-b border-slate-200/80 bg-slate-50/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Department</div>
            <div className="text-sm sm:text-base text-slate-900 font-semibold mt-1">{currentStudent.department}</div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Study Year</div>
            <div className="text-sm sm:text-base text-slate-900 font-semibold mt-1">{currentStudent.studyYear}</div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</div>
            <div className="text-sm sm:text-base text-blue-600 font-semibold mt-1 truncate">{currentStudent.email}</div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Enrolled</div>
            <div className="text-sm sm:text-base text-slate-900 font-semibold mt-1">{currentStudent.enrolled}</div>
          </div>
        </div>

        {/* About Section */}
        <div className="p-6 sm:p-8 border-b border-slate-200/80">
          <h2 className="text-base font-bold text-slate-900 mb-2">About</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {currentStudent.about}
          </p>
        </div>

        {/* Academic Details Section */}
        <div className="p-6 sm:p-8 border-b border-slate-200/80">
          <h2 className="text-base font-bold text-slate-900 mb-4">Academic Details</h2>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              <div className="p-4 sm:p-5 bg-slate-50/60 space-y-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Department</span>
                  <span className="text-sm font-semibold text-slate-800 block mt-0.5">{currentStudent.academicDetails.department}</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 bg-white space-y-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Current Academic Standing</span>
                  <span className="text-sm font-bold text-emerald-700 block mt-0.5">{currentStudent.academicDetails.currentStanding}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enrolled Subjects Section */}
        <div className="p-6 sm:p-8">
          <h2 className="text-base font-bold text-slate-900 mb-4">
            Enrolled Subjects
          </h2>

          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs divide-y divide-slate-100">
            {currentStudent.enrolledSubjects.map((sub) => (
              <div
                key={sub.code}
                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50/60 transition-colors"
              >
                <div className="text-sm text-slate-800">
                  <span className="font-mono font-bold text-blue-600 mr-2">{sub.code}</span>
                  <span className="font-medium text-slate-900">{sub.name}</span>
                </div>
                <div className="shrink-0">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-600 rounded-lg border border-slate-200">
                    {sub.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
