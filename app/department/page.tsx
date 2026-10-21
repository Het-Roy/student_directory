import departmentData from "../../data/departmentData";
import DepartmentCard from "@/components/DepartmentCard";

async function DepartmentPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Departments
          </h1>
          <p className="mt-1 text-sm sm:text-base text-slate-500">
            Overview of campus departments, curriculum programs, and specialized academic tracks.
          </p>
        </div>
      </div>

      {/* Department Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departmentData.map((e) => {
            return <DepartmentCard key={e.id} department={e} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DepartmentPage;