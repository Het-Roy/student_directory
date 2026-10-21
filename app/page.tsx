import studentData from "../data/studentData";
import StudentCard from "@/components/StudentCard";

function Student() {
  const arr = studentData;

  return (
    <div>
      {/* Header and Filter Controls */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="max-w-2xl mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Student Directory
            </h1>
            <p className="mt-1 text-sm sm:text-base text-slate-500">
              Browse, filter, and view student records across academic departments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-slate-50/80 p-3 sm:p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
            <div className="flex-1 flex items-center bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 shadow-2xs focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 shrink-0">
                Search:
              </span>
              <input
                type="text"
                placeholder="Search students by name, ID, or track..."
                className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
              />
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 shadow-2xs focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all sm:w-72">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0">
                Department:
              </span>
              <select
                className="w-full bg-transparent text-sm text-slate-800 focus:outline-none font-medium cursor-pointer"
              >
                <option value="">All department</option>
                <option value="">cse</option>
                <option value="">be</option>
                <option value="">qwer</option>
                <option value="">asdf</option>
                <option value="">zxcv</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Student Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {arr.map((e) => {
            return <StudentCard key={e.id} student={e} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Student;