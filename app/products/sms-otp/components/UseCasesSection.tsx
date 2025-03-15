import Image from "next/image";

const UseCasesSection = () => {
  const useCases = [
    {
      title: "User Login",
      description: "Add a second layer of security to your app by verifying users during login."
    },
    {
      title: "Transaction Validation",
      description: "Use SMS OTPs to verify sensitive actions, such as payment approvals or fund transfers."
    },
    {
      title: "Account Recovery",
      description: "Securely recover user accounts by sending OTPs for password resets."
    },
    {
      title: "Verify OTP",
      description: "The system verifies the OTP to authenticate the user's identity."
    },
    {
      title: "Two-Factor Authentication (2FA)",
      description: "Enhance security with two-factor authentication to prevent unauthorized access."
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/2">
            <div className="relative h-[300px] w-full">
              <Image 
                src="/placeholder.svg?height=300&width=300" 
                alt="Person using SMS OTP" 
                fill
                className="object-cover rounded-lg"
              />
              {/* Replace with your actual image */}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-8 text-black">Use cases</h3>
            
            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full border border-[#40196D] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#40196D]"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-black">{useCase.title}</h4>
                    <p className="text-gray-700">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection; 