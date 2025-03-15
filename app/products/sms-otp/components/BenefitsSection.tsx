import Image from "next/image";

const BenefitsSection = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative h-[350px] w-full">
            <Image 
              src="/placeholder.svg?height=350&width=450" 
              alt="Analytics Dashboard" 
              fill
              className="object-contain"
            />
            {/* This is where you would place your actual analytics dashboard image */}
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-black">Real-Time Logs and <span className="text-[#40196D]">Analytics</span></h2>
          <p className="text-gray-600 mb-8">
            Track OTP delivery status and performance with real-time monitoring tools. View detailed logs of all OTP transactions, including delivery success/failure rates, response times, and more.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#40196D] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-black text-lg">Delivery Reports</h3>
                <p className="text-gray-600">Access detailed reports on OTP delivery status to monitor performance.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#40196D] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-black text-lg">Error Logs</h3>
                <p className="text-gray-600">View errors and troubleshoot OTP delivery issues in real time.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#40196D] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-black text-lg">Success Rates</h3>
                <p className="text-gray-600">Get insights into your OTP success rates and optimize your user verification process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection; 