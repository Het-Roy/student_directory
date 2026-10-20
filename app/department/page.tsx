import departmentData from "../../data/departmentData";
import DepartmentCard from "@/components/DepartmentCard";

async function DepartmentPage() {
  return (
    <div className="bg-white min-h-[85vh]">
      <div className="w-[100vw] border-b h-[10vw]">
        <div className="w-[100%] text-[2vw] pl-[10vw] mt-[2vw] flex items-center font-bold h-[30%] text-black">
          Departments
        </div>
        <div className="w-[100%] text-[1vw] pl-[10vw] flex items-center text-gray-700 h-[25%]">
          Overview of campus departments and specialized academic tracks.
        </div>
      </div>

      <div className="w-[100vw] gap-[2vw] p-[2vw] pl-[10vw] flex flex-wrap bg-white">
        {departmentData.map((e) => {
          return <DepartmentCard key={e.id} department={e} />;
        })}
      </div>
    </div>
  );
}

export default DepartmentPage;