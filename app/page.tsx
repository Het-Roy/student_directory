import studentData from "../data/studentData";
import StudentCard from "@/components/StudentCard";

function Student() {
  const arr = studentData;

  return (
    <>
      <div className="w-[100vw] h-[12vw] bg-white">
        <div className="w-[100%] flex justify-center h-[30%]">
          <div className="w-[80%] justify-center items-center flex h-[100%]">
            <p className="text-gray-700 font-bold">Search:</p>
            <input
              type="text"
              placeholder="Search Any thing..."
              className="w-[50%] ml-[1vw] h-[70%] border p-[1vw] text-[1vw] font-bold bg-white text-black"
            />
            <div className="w-[40%] flex justify-center items-center h-[70%] ml-[5vw]">
              <p className="text-gray-700 font-bold">Department:</p>
              <select
                name=""
                className="ml-[1vw] w-[50%] p-[0.5vw] rounded-[1vw] h-[90%] border bg-white text-black"
                id=""
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

      <div className="w-[100vw] pl-[4vw] flex gap-[2vw] p-[1vw] flex-wrap bg-white">
        {arr.map((e) => {
          return <StudentCard key={e.id} student={e} />;
        })}
      </div>
    </>
  );
}

export default Student;