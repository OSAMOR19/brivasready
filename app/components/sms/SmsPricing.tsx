import Image from "next/image";
import img1 from "@/components/Images/pics/reseller1.svg";
import img2 from "@/components/Images/pics/personalise1.svg";
import img3 from "@/components/Images/pics/personalise2.svg";

const customizationOptions = [
  {
    title: "Domain Setup",
    description: "Use your domain or Brivas-provided domain.",
    image: img1,
  },
  {
    title: "Logo Upload",
    description: "Upload your logo and customize the user interface to match your brand.",
    image: img2,
  },
  {
    title: "Text Customization",
    description: "Personalize the text and interface elements of your reseller platform.",
    image: img3,
  },
];

export default function ResellerCustomization() {
  return (
    <div className="mb-20 text-center">
      <h1 className="text-4xl font-bold text-black mb-4">
        Personalize Your Reseller Platform
      </h1>
      <h6 className="text-xl text-black mb-12 max-w-1xl mx-auto">
        Set up a professional reseller platform with your branding, including a custom domain and logo.
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {customizationOptions.map((option, index) => (
          <div key={index} className="bg-white text-start text-black shadow-md rounded-2xl overflow-hidden">
            <Image src={option.image} alt={option.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
