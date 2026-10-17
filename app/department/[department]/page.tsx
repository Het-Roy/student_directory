import Image from "next/image";
import Link from "next/link"
import departmentData from "@/data/departmentData";
import students from "@/data/studentData";

async function Student({ params }: any) {
    const { department } = await params;
    console.log(department)
    const arr = departmentData;
    const e = students ; 
    return (
        <>
            <div className=" w-[95vw] h-[20vw]">
                <div className="w-[100%] ml-[4vw] flex h-[50%] ">
                    <div className="w-[60%] h-[100%] ">
                        <div className="w-[100%] mt-[1vw] flex h-[50%]">
                            <div className="text-[2vw] p-[1vw] flex font-bold items-center h-[100%] ">
                                {arr[department - 1].name} 
                            </div>
                            <div className="w-[65%] pl-[1vw] flex items-center h-[100%] ">
                                <div className="border p-[0.5vw] text-[0.8vw] bg-blue-200 text-blue-700 font-bold rounded-[0.5vw]">
                                    Specializion under computer
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%]  p-[1vw] flex items-start text-[1vw] h-[50%]">
                            {arr[department - 1].description}
                        </div>
                    </div>
                        <div className="w-[30%] h-[100%] ">
                            <div className="w-[100%] flex justify-center items-end text-[1.3vw] font-bold h-[50%] ">
                                Department Track
                            </div>
                            <div className="w-[100%] flex justify-center items-start h-[50%]  font-bold">
                                <div className="w-[40%] flex rounded-[0.5vw] bg-blue-200 justify-center items-center p-[0.5vw]  ">
                                    {arr[department - 1].code}
                                </div>
                            </div>
                        </div>
                </div>
                <div className="w-[100%] justify-center flex h-[30%] ">
                    <div className=" w-[25%] h-[100%]">
                        <div className="w-[100%] h-[50%] flex justify-center items-center font-bold border text-[1vw] text-gray-600">
                            Academic lead
                        </div>
                        <div className="w-[100%] h-[50%] flex justify-center items-center font-bold border text-[1vw]">
                            Prof. Elena Vance
                        </div>
                    </div>
                    <div className=" w-[25%] h-[100%]">
                        <div className="w-[100%] h-[50%] flex justify-center items-center font-bold border text-[1vw] text-gray-600">
                            Primary Core Lab

                        </div>
                        <div className="w-[100%] h-[50%] flex justify-center items-center font-bold border text-[1vw]">
                            Turing Hall 408

                        </div>
                    </div>
                    <div className=" w-[25%] h-[100%]">
                        <div className="w-[100%] h-[50%] flex justify-center items-center font-bold border text-[1vw] text-gray-600">
                            Total Enrollment

                        </div>
                        <div className="w-[100%] h-[50%] flex justify-center items-center font-bold border text-[1vw]">
                            4 Active Enrollees

                        </div>
                    </div>
                    <div className=" w-[25%] h-[100%]">

                        <div className="w-[100%] h-[50%] flex justify-center items-center font-bold border text-[1vw] text-gray-600">
                            Curriculum Cycle

                        </div>
                        <div className="w-[100%] h-[50%] flex justify-center items-center font-bold border text-[1vw]">
                            2024-2025 Revised

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[95vw] h-[4vw] mt-[2vw] flex">
                <div className=" p-[1vw] h-[100%] flex justify-center items-center text-[1.5vw] font-bold">
                    Students in this Specialization
                </div>
                <div className="w-[4vw] flex justify-center items-center h-[100%]  ">

                    <div className="w-[2vw] h-[2vw] flex justify-center items-center rounded-[100%] bg-gray-300">
                        {arr[department - 1].students.length}
                    </div>


                </div>

                <div className="w-[30%] flex ml-[25vw] justify-center items-center  h-[100%] ">
                    <div className="w-[50%] h-[100%] flex text-[1.2vw] justify-end text-[1vw] text-gray-600 items-center   ">

                        Filtered by Track:
                    </div>
                    <div className="w-[50%] h-[100%] flex text-[1.2vw] justify-start p-[1vw] text-[1vw] font-bold items-center   ">
                        {arr[department - 1].name}
                    </div>


                </div>



            </div>






            <div className="p-[2vw] gap-[3vw] flex flex-wrap  ">
                {
                    arr[department - 1].students.map((e)=>{
                        return(
                            <div key={students[e-1].id} className="w-[30%] p-[1=0.5vw] h-[17vw] rounded-[1vw] border">
                                <div className="w-[100%] flex items-center justify-center gap-[15vw] h-[30%] ">
                                    <div className="w-[10%] h-[70%] rounder bg-blue-200 text-blue-700 flex justify-center items-center font-bold text-[1.1vw] rounded-[0.5vw]">
                                        {students[e-1].initials}
                                    </div>
                                    <div className="w-[25%] h-[50%] rounded flex items-center justify-center border">
                                        {students[e-1].studentId}
                                    </div>
                                </div>
                                <div className="w-[100%] font-bold flex pl-[2vw] items-center h-[20%] ">
                                    {students[e-1].name}
                                </div>
                                <div className="w-[100%] gap-[4vw] flex pl-[2vw] items-center h-[20%] ">
                                    <div className="w-[50%] h-[70%] rounded flex text-[1vw] text-blue-600 bg-blue-200 font-bold items-center justify-center  ">
                                        {students[e-1].department}
                                    </div>
                                    <div className="w-[40%] h-[80%] flex items-center justify-center font-bold ">
                                        {students[e-1].studyYear}
                                    </div>
                                </div>
                                <Link className="w-[100%] flex items-center pl-[2vw] border-t font-bold text-blue-600 mt-[1vw] h-[20%]" href={`/studentData/${students[e-1].id}`}>
                                    {"View >"}
                                </Link>
                            </div>
                        )
                    })
                }
                
            </div>

        </>
    )
}


export default Student; 