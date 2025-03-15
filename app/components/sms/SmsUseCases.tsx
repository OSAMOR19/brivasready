"use client";
import { useState } from "react";
import usecaseImage from "@/components/images/pics/usecaseimagecorrect.svg";
import Image from "next/image";

export default function UseCases() {
  const [selectedCase, setSelectedCase] = useState("marketing");

  const useCases = [
    {
      id: "marketing",
      title: "Marketing Agencies",
      description:
        "Offer SMS marketing solutions to clients looking to reach their audience with promotional campaigns.",
    },
    {
      id: "enterprises",
      title: "Enterprises",
      description:
        "Provide enterprises with a reliable tool to send mass notifications, alerts, and updates.",
    },
    {
      id: "startups",
      title: "Startups and SMEs",
      description:
        "Help small businesses automate their customer communication via SMS.",
    },
    {
      id: "nonprofits",
      title: "Non-profits",
      description:
        "Enable non-profits to send event announcements and fundraising messages to their supporters.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900">Use case</h2>
        <div className="mt-2 border-t border-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="flex items-start gap-3">
              <div className="mt-1">
                <input
                  type="radio"
                  id={`usecase-${useCase.id}`}
                  name="useCase"
                  className="w-4 h-4 text-purple-800 border-gray-300 focus:ring-purple-800"
                  onChange={() => setSelectedCase(useCase.id)}
                  checked={selectedCase === useCase.id}
                />
              </div>
              <div>
                <label
                  htmlFor={`usecase-${useCase.id}`}
                  className="block font-medium text-gray-900 mb-1"
                >
                  {useCase.title}
                </label>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          {/* Using the exact image from the screenshot */}
          <Image
            src={usecaseImage}
            alt="SMS use case illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
