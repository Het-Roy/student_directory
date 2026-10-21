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
    <div className="w-screen flex justify-center items-center py-[2vw] bg-white text-black min-h-[85vh]">
      <div className="w-[80%] border border-gray-200 rounded-2xl bg-white shadow-xs overflow-hidden">
        {/* Profile Header */}
        <div className="w-[100%] flex border-b border-gray-200 p-[1.5vw] bg-gray-50/50 items-center">
          <div className="w-[5vw] h-[5vw] text-[1.8vw] bg-blue-100 text-blue-700 rounded-xl font-bold border border-blue-200 flex justify-center items-center shrink-0">
            {currentStudent.initials}
          </div>
          <div className="ml-[1.5vw] flex flex-col justify-center">
            <div className="font-bold text-[1.8vw] text-gray-900 leading-tight">
              {currentStudent.name}
            </div>
            <div className="flex items-center gap-[0.8vw] mt-[0.5vw]">
              <div className="px-[0.8vw] py-[0.2vw] rounded-md bg-blue-50 text-[0.9vw] text-blue-700 font-semibold border border-blue-200">
                {currentStudent.studentId}
              </div>
              <div className="px-[0.8vw] py-[0.2vw] rounded-md bg-green-50 text-green-700 text-[0.9vw] font-semibold border border-green-200">
                {currentStudent.status}
              </div>
            </div>
          </div>
        </div>

        {/* Basic Info */}
        <div className="border-b border-gray-200 p-[1.5vw] space-y-[1vw]">
          <div className="flex w-[100%]">
            <div className="w-[50%]">
              <div className="text-[0.9vw] text-gray-500 font-bold uppercase tracking-wide">DEPARTMENT</div>
              <div className="text-[1.1vw] text-gray-800 font-medium mt-[0.2vw]">{currentStudent.department}</div>
            </div>
            <div className="w-[50%]">
              <div className="text-[0.9vw] text-gray-500 font-bold uppercase tracking-wide">STUDY YEAR</div>
              <div className="text-[1.1vw] text-gray-800 font-medium mt-[0.2vw]">{currentStudent.studyYear}</div>
            </div>
          </div>

          <div className="flex w-[100%]">
            <div className="w-[50%]">
              <div className="text-[0.9vw] text-gray-500 font-bold uppercase tracking-wide">EMAIL</div>
              <div className="text-[1.1vw] text-blue-600 font-medium mt-[0.2vw]">{currentStudent.email}</div>
            </div>
            <div className="w-[50%]">
              <div className="text-[0.9vw] text-gray-500 font-bold uppercase tracking-wide">ENROLLED</div>
              <div className="text-[1.1vw] text-gray-800 font-medium mt-[0.2vw]">{currentStudent.enrolled}</div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="border-b border-gray-200 p-[1.5vw]">
          <div className="text-[1.3vw] font-bold mb-[0.4vw] text-gray-900">About</div>
          <div className="text-[1vw] text-gray-600 leading-relaxed">
            {currentStudent.about}
          </div>
        </div>

        {/* Academic Details Section */}
        <div className="border-b border-gray-200 p-[1.5vw]">
          <div className="text-[1.3vw] font-bold mb-[0.8vw] text-gray-900">Academic Details</div>
          <div className="w-[100%] flex border border-gray-200 rounded-xl overflow-hidden">
            <div className="w-[50%] border-r border-gray-200 p-[1vw] bg-gray-50 space-y-[0.5vw]">
              <div className="text-[0.95vw] text-gray-600 font-medium">Department</div>
              <div className="text-[0.95vw] text-gray-600 font-medium">Current Academic Standing</div>
            </div>
            <div className="w-[50%] p-[1vw] space-y-[0.5vw] font-semibold text-gray-900 bg-white">
              <div className="text-[0.95vw]">
                {currentStudent.academicDetails.department}
              </div>
              <div className="text-[0.95vw] text-emerald-700">
                {currentStudent.academicDetails.currentStanding}
              </div>
            </div>
          </div>
        </div>

        {/* Enrolled Subjects Section */}
        <div className="p-[1.5vw]">
          <div className="text-[1.1vw] font-bold mb-[0.8vw] text-gray-800 uppercase tracking-wide">
            Enrolled Subjects
          </div>

          <div className="w-[100%] flex border border-gray-200 rounded-xl overflow-hidden">
            <div className="w-[75%] border-r border-gray-200 p-[1vw] space-y-[0.6vw]">
              {currentStudent.enrolledSubjects.map((sub) => (
                <div key={sub.code} className="text-[0.95vw] text-gray-800">
                  <span className="font-semibold text-gray-900">{sub.code}:</span> {sub.name}
                </div>
              ))}
            </div>
            <div className="w-[25%] p-[1vw] space-y-[0.6vw] bg-gray-50">
              {currentStudent.enrolledSubjects.map((sub) => (
                <div key={sub.code} className="text-[0.95vw] text-gray-600 font-medium">
                  {sub.category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
