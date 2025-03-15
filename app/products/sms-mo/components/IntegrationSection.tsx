'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const IntegrationSection = () => {
  const [openItem, setOpenItem] = useState('Developer API');

  const integrationItems = [
    {
      title: "Developer API",
      content: "Easily integrate SMS MO into your existing systems using our developer-friendly API."
    },
    {
      title: "Webhook Setup",
      content: "Configure webhooks to receive real-time notifications for incoming messages and events."
    },
    {
      title: "Auto Responses",
      content: "Set up automated responses based on keywords or message patterns."
    },
    {
      title: "Custom Routing",
      content: "Define custom routing rules to direct messages to specific endpoints or handlers."
    }
  ];

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-black font-bold mb-4">Easy Integration and Full Control</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          BRIVAS SMS MO integrates easily with your existing platforms and workflows, providing full control over how incoming messages are handled.
        </p>
      </div>

      <div className=" text-black space-y-4">
        {integrationItems.map((item) => (
          <div 
            key={item.title}
            className="border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenItem(openItem === item.title ? '' : item.title)}
              className="w-full p-4 flex justify-between items-center text-left hover:bg-gray-50"
            >
              <span className="font-medium text-lg">{item.title}</span>
              {openItem === item.title ? (
                <Minus className="h-5 w-5 text-gray-500" />
              ) : (
                <Plus className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openItem === item.title && (
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-600">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationSection; 