import Link from "next/link";

function Not() {
    return (
        <div className="w-[100vw] flex flex-col justify-center items-center h-[60vh] border ">
            <div className="w-[25%] h-[4vw] text-[2vw]  flex justify-center items-center font-bold">
                Page Is Not Available
            </div>
            <div className="w-[30%] h-[4vw] gap-[1vw] flex justify-center items-center font-bold">
                <Link className="border p-[1vw] rounded-[1vw] text-[1vw]" href={"/"}>
                    Go To Student Page
                </Link>
                <Link className="border p-[1vw] rounded-[1vw] text-[1vw]" href={"/department"}>
                    Go To Department Page
                </Link>
            </div>
        </div>
    )
}


export default Not; 