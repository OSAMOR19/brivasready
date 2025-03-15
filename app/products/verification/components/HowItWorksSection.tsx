import React from "react";

interface Step {
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps: Step[];
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ steps }) => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Our verification process is simple, secure, and designed for a seamless user experience.
      </p>
      <div
</rewritten_file> 