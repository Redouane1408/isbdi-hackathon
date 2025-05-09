import { useState } from "react";
import { CircleIcon, HelpCircleIcon, SendIcon, CheckIcon, FileQuestionIcon, PlusCircleIcon, PlusSquareIcon, BookPlusIcon } from "lucide-react";
//import { Slider } from "@/Components/ui/slider";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const DashboardPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  // Move these inside the component:
  const [carouselIndex, setCarouselIndex] = useState(0);
  const answers = [
    "Ijara is a leasing contract in Islamic finance.",
    "Ijara can be used for property, vehicles, or equipment.",
    "Ijara differs from conventional leasing by prohibiting interest."
  ];
  const steps = ["Context", "Questions", "Prompt"];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      {/* Stepper */}
      <div className="mb-8">
        <div className="flex justify-center items-center">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              {/* Step circle with icon */}
              <div 
                className={`flex items-center justify-center w-10 h-10 rounded-full ${index < currentStep ? 'bg-blue-500 text-white' : 
                  index === currentStep ? 'border-2 border-blue-500 text-blue-500' : 'border-2 border-gray-300 text-gray-400'}`}
              >
                {index < currentStep ? (
                  < PlusCircleIcon className="h-5 w-5" />
                ) : index === 0 ? (
                  <CircleIcon className="h-5 w-5" />
                ) : index === 1 ? (
                  <HelpCircleIcon className="h-5 w-5" />
                ) : (
                  <SendIcon className="h-5 w-5" />
                )}
              </div>
              
              {/* Step label */}
              <span className={`ml-2 ${index <= currentStep ? 'text-blue-500 font-medium' : 'text-gray-500'}`}>
                {step}
              </span>
              
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-4">
                  <div className={`h-1 ${index < currentStep ? 'bg-blue-500' : 'bg-gray-300'}`} style={{ width: '100px' }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="mt-6">
        {currentStep === 0 && (
          <div className="border rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">📝 Describe your context</h2>
            </div>
            <textarea
              className="w-full min-h-[200px] resize-none border rounded-md p-3"
              placeholder="Enter your Details"
            />
            <div className="mt-4 flex justify-end">
              <button 
                onClick={handleNextStep}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <SendIcon className="h-4 w-4" />
                <span>Send message</span>
              </button>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Questions</h2>
            <p className="text-gray-500 mb-4">How familiar are you with Islamic finance?</p>
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <button onClick={() => setCarouselIndex((carouselIndex - 1 + answers.length) % answers.length)} className="px-2 py-1 bg-gray-200 rounded">Prev</button>
                <div className="mx-4 w-full text-center border rounded-md p-3 bg-gray-50">{answers[carouselIndex]}</div>
                <button onClick={() => setCarouselIndex((carouselIndex + 1) % answers.length)} className="px-2 py-1 bg-gray-200 rounded">Next</button>
              </div>
              <div className="flex justify-center mt-2 gap-2">
                {answers.map((_, idx) => (
                  <span key={idx} className={`h-2 w-2 rounded-full ${idx === carouselIndex ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
                ))}
              </div>
            </div>
            {/* New input field for 'Can I ask him again?' */}
            <input
              type="text"
              className="w-full border rounded-md p-3 mb-4"
              placeholder="Can I ask him again?"
            />
            <div className="mt-4 flex justify-end">
              <button 
                onClick={handleNextStep}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <SendIcon className="h-4 w-4" />
                <span>Continue</span>
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Prompt</h2>
            <p className="text-gray-500 mb-4">Here’s a visual summary of your input:</p>
            <div className="p-4 bg-gray-50 border rounded-md mb-4">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={[{ name: 'Familiarity', value: 7 }]}> {/* Replace 7 with slider value */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <textarea
              className="w-full min-h-[100px] resize-none border rounded-md p-3 mb-4"
              placeholder="Edit the prompt if needed"
              defaultValue="Explain the concept of Ijara in Islamic finance, including its structure, requirements, and how it differs from conventional leasing. Include practical examples of its application in modern financial systems."
            />
            <div className="mt-4 flex justify-end">
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <SendIcon className="h-4 w-4" />
                <span>Generate</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;