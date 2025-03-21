import Image from "next/image";
import correct from "@/components/Images/logos/otpworks.svg"

const SMSOTPProcessSection = () => {
  const steps = [
    {
      id: "generate",
      title: "Generate an OTP",
      description: "Your application generates a time-limited password when a user initiates an action that requires verification."
    },
    {
      id: "send",
      title: "Send OTP via SMS",
      description: "BRIVAS delivers the OTP instantly to the user's mobile number."
    },
    {
      id: "enter",
      title: "User Enters OTP",
      description: "The user enters the OTP into your app or website for verification."
    },
    {
      id: "verify",
      title: "Verify OTP",
      description: "The system verifies the OTP to authenticate the user's identity."
    },
    {
      id: "secure",
      title: "Secure User Authentication",
      description: "Once verified, the user can proceed with the action (e.g., login, transaction)."
    }
  ];

  return (
    <div className="mb-20">
      <h3 className="text-xl font-semibold text-black mb-8 border-b border-gray-200 pb-2">How it works</h3>
      
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