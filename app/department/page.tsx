import Image from "next/image";
import departmentData from "../../data/departmentData"
import Link from "next/link"

async function Student() {
    
    return (
        <>
            <div className="w-[100vw] border h-[10vw] ">
                <div className="w-[100%] text-[2vw] pl-[10vw] mt-[2vw] flex items-center font-bold h-[30%] ">
                    Departments
                </div>
                <div className="w-[100%] text-[1vw] pl-[10vw] flex items-center text-gray-700 h-[25%] ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>





            </div>


            <div className="w-[100vw] border gap-[2vw] p-[2vw] pl-[10vw] flex-wrap">
                {
                    departmentData.map((e) => {
                        return (
                            <div key={e.id} className="w-[90%] h-[12vw] pt-[1vw] border">
                                <div className="w-[100%] h-[30%]  flex gap-[1vw] pl-[2vw] items-center  ">
                                    <Image src={"/earthlogo.png"} alt="Earth Logo" className="w-[4%] border h-[100%] p-[0.5vw] bg-blue-200 rounded-[1vw]" width={300} height={300} />
                                    <div className="text-[1.5vw] font-bold">
                                        {e.department}
                                    </div>
                                </div>
                                <div className="w-[100%] h-[30%] flex  ">
                                    <p className="w-[80%] pl-[2.5vw] h-[100%] text-[1.2vw] flex text-gray-500 font-border items-center">
                                        {e.description}
                                    </p>
                                    <Link className="w-[20%] h-[100%]  text-[1.3vw] flex font-bold justify-center text-blue-500 font-border items-center" href={`/department/${e.id}`}>
                                        {"View >"}
                                    </Link>
                                </div>
                                <div className="w-[100%] h-[30%] flex  ">
                                    <div className="w-[20%] flex justify-center gap-[1vw] items-center h-[100%] ">
                                        <Image src={"/earthlogo.png"} alt="Earth Logo" className="w-[10%] border h-[50%] rounded-[1vw]" width={300} height={300} />
                                        <p>
                                            {e.specializationCount} spacialization
                                        </p>
                                    </div>
                                    <div className="w-[20%] flex justify-center gap-[1vw] items-center h-[100%] ">
                                        <Image src={"/earthlogo.png"} alt="Earth Logo" className="w-[10%] border h-[50%] rounded-[1vw]" width={300} height={300} />
                                        <p>
                                            {e.studentCount} Enrolled Students
                                        </p>
                                    </div>


                                </div>
                            </div>
                        )
                    })
                }

            </div>






        </>
    )
}


export default Student; 