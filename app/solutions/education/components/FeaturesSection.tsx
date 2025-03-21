import Image from "next/image";
import correct from "@/components/Images/pics/collaborate.svg"

const SMSOTPProcessSection = () => {
  const steps = [
    {
      id: "generate",
      title: "Class Updates",
      description: "Notify students about schedule changes, class cancellations, or assignment deadlines in real-time."
    },
    {
      id: "send",
      title: "Event Notifications",
      description: "Keep students and parents informed about school events, parent-teacher meetings, and extracurricular activities."
    },
    {
      id: "enter",
      title: "Fee Reminders",
      description: "Send automated reminders to parents and students for upcoming fee payments, reducing late submissions."
    },
    {
      id: "verify",
      title: "Exam Schedules",
      description: "Share exam timetables and results promptly, ensuring students are always prepared."
    },
    {
      id: "secure",
      title: "Online Learning Support",
      description: "Enable secure access to e-learning platforms with SMS OTP verification for a seamless digital learning experience."
    }
  ];

  return (
    <div className="mb-20 p-40">
      <h3 className="text-xl font-semibold text-[#40196D] mb-8 border-b border-gray-200 pb-2">Features</h3>
      
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/2">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full border border-[#B891E5] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full "></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-base text-black">{step.title}</h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div className="relative mt-9 h-[400px] w-full">
            <Image 
              src={correct}
              alt="SMS OTP Process Illustration" 
              fill
              className="object-contain"
            />
            {/* Replace with your actual illustration of the SMS OTP process */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSOTPProcessSection; 