import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How secure is SMS OTP authentication?",
      answer: "SMS OTP provides a strong layer of security through two-factor authentication. While no system is 100% secure, requiring both something the user knows (password) and something they have (phone) significantly reduces the risk of unauthorized access."
    },
    {
      question: "How quickly are the OTPs delivered?",
      answer: "Our system typically delivers OTPs within seconds. Delivery times may vary slightly based on network conditions and carrier processing, but our priority delivery ensures the fastest possible transmission."
    },
    {
      question: "Can I customize the OTP message format?",
      answer: "Yes, you can fully customize the OTP message template to match your brand voice and include specific instructions or information for your users."
    },
    {
      question: "What happens if a user doesn't receive the OTP?",
      answer: "Our system includes retry functionality that allows users to request a new OTP if they don't receive the first one. You can also configure fallback options like email OTP if needed."
    },
    {
      question: "Is there a limit to how many OTPs I can send?",
      answer: "The number of OTPs you can send depends on your plan. Our Starter plan includes 500 OTPs per month, Business plan includes 2,000, and Enterprise plans can be customized for unlimited usage."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">
        Frequently Asked <span className="text-[#40196D]">Questions</span>
      </h2>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
        Everything you need to know about our SMS OTP service
      </p>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-gray-200 py-5"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-[#40196D]" />
              ) : (
                <ChevronDown className="h-5 w-5 text-[#40196D]" />
              )}
            </button>
            {openIndex === index && (
              <div className="mt-3 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection; 