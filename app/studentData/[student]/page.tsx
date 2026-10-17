import Image from "next/image";
import studentData from "../../../data/studentData"


export default async function Home({ params }: any) {
  const { student } = await params;
  console.log(await params)
  console.log(student);
  return (
    <div className="w-screen border flex justify-center items-center h-[90vh]">
      <div className="w-[80%] border h-[90%]">
        <div className="w-[100%] flex border-b p-4 h-[20%]">
          <div className="w-[10%] text-[2vw] bg-blue-300 text-blue-800 rounded-[10%] font-bold border flex justify-center font-600 items-center h-[100%]">
            {studentData[Number(student) - 1]?.initials}
          </div>
          <div className="w-[100%] ml-4 h-[100%]">
            <div className="w-[100%] h-[50%] pl-[3.5%] font-bold text-[2vw]">
              {studentData[Number(student) - 1]?.name}
            </div>
            <div className="w-[100%] h-[50%] flex items-center">
              <div className="w-[15%] h-[60%] ml-[3%] rounded bg-blue-200 text-[1vw] flex text-blue-800 font-bold justify-center items-center border">
                {studentData[Number(student) - 1]?.studentId}
              </div>
              <div className="w-[15%] h-[60%] ml-[3%] rounded flex text-green-800 text-[1vw] font-bold justify-center items-center border">
                {studentData[Number(student) - 1]?.status}
              </div>
            </div>

          </div>
        </div>
        <div className="border-b w-[100%] h-[20%]">
          <div className=" flex w-[100%] h-[50%]">


            <div className=" w-[50%] h-[100%]">
              <div className="w-[100%] text-[1vw] text-gray-500 font-bold flex items-center pl-[1vw] h-[50%]  ">
                DEPARTMENT
              </div>
              <div className="w-[100%] text-[1vw] text-gray-500 flex items-center pl-[1vw] h-[50%]  ">
                {studentData[Number(student) - 1]?.department}
              </div>
            </div>

            <div className=" w-[50%] h-[100%]">
              <div className="w-[100%] text-[1vw] text-gray-500 font-bold flex items-center pl-[1vw] h-[50%]  ">
                STUDY YEAR
              </div>
              <div className="w-[100%] text-[1vw] text-gray-500 flex items-center pl-[1vw] h-[50%]  ">
                {studentData[Number(student) - 1]?.studyYear}
              </div>
            </div>

          </div>



          <div className=" flex w-[100%] h-[50%]">


            <div className=" w-[50%] h-[100%]">
              <div className="w-[100%] text-[1vw] text-gray-500 font-bold flex items-center pl-[1vw] h-[50%]  ">
                EMAIL
              </div>
              <div className="w-[100%] text-[1vw] text-blue-500 flex items-center pl-[1vw] h-[50%]  ">
                {studentData[Number(student) - 1]?.email}
              </div>
            </div>

            <div className=" w-[50%] h-[100%]">
              <div className="w-[100%] text-[1vw] text-gray-500 font-bold flex items-center pl-[1vw] h-[50%]  ">
                ENROLLED
              </div>
              <div className="w-[100%] text-[1vw] text-gray-500 flex items-center pl-[1vw] h-[50%]  ">
                {studentData[Number(student) - 1]?.enrolled}
              </div>
            </div>

          </div>





        </div>


        <div className="border-b w-[100%] h-[18%]">

          <div className="w-[100%] flex items-center pl-[1vw] text-[1.5vw] font-bold h-[40%] ">
            About
          </div>
          <div className="w-[100%] h-[60%] pl-[1vw] text-[1vw] flex justify-center items-center">
            {studentData[Number(student) - 1]?.about}
          </div>

        </div>



        <div className="border-b w-[100%] h-[18%]">
          <div className="w-[100%] flex items-center pl-[1vw] text-[1.5vw] font-bold h-[40%] ">
            Academic Details
          </div>
          <div className="w-[100%] flex h-[60%]">

            <div className="w-[75%] border h-[100%]">
              <div className="w-[100%] h-[50%] flex items-center pl-[1vw] text-[1vw] ">
                Department
              </div>
              <div className="w-[100%] h-[50%] flex items-center pl-[1vw] text-[1vw] ">
                Current Academic Standing
              </div>

            </div>
            <div className="w-[25%] border h-[100%] ">
              <div className="w-[100%] h-[50%] flex items-center pl-[1vw] text-[1vw] ">
                {studentData[Number(student) - 1]?.academicDetails.department}
              </div>
              <div className="w-[100%] h-[50%] flex items-center pl-[1vw] text-[1vw] ">
                {studentData[Number(student) - 1]?.academicDetails.currentStanding}
              </div>
            </div>
          </div>
        </div>



        <div className="w-[100%] h-[6%] font-bold pl-[1vw] border flex items-center text-gray-800 text-[1vw]">
          ENROLLED SUBJECT
        </div>

        <div className="w-[100%] flex h-[18%] border">
          <div className="w-[75%] h-[100%]">
            {

              studentData[Number(student) - 1]?.enrolledSubjects.map((a) => {
                return (
                  <div className="w-[100%] flex items-center pl-[1vw] h-[33%] ">
                    {a.code}: {a.name}
                  </div>
                )
              })
            }




          </div>
          <div className="w-[25%] h-[100%]">
            {

              studentData[Number(student) - 1]?.enrolledSubjects.map((a) => {
                return (
                  <div className="w-[100%] flex items-center pl-[1vw] h-[33%] ">
                    {a.category}
                  </div>
                )
              })
            }


          </div>













        </div>
      </div >
    </div >
  );
}



