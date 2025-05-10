import { useState } from "react";
import { CircleIcon, HelpCircleIcon, SendIcon, CheckIcon, FileQuestionIcon, PlusCircleIcon, PlusSquareIcon, BookPlusIcon, EyeIcon, XIcon } from "lucide-react";
//import { Slider } from "@/Components/ui/slider";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const DashboardPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState(null);
  
  const answers = [
    "Ijara is a leasing contract in Islamic finance.",
    "Ijara can be used for property, vehicles, or equipment.",
    "Ijara differs from conventional leasing by prohibiting interest."
  ];
  
  const steps = ["Context", "Questions", "Prompt"];
  
  // Sample data for the chart in the sidebar
  const chartData = [
    { month: 'Jan', profit: 35000 },
    { month: 'Feb', profit: 28000 },
    { month: 'Mar', profit: 32000 },
    { month: 'Apr', profit: 30000 },
    { month: 'May', profit: 27000 },
    { month: 'Jun', profit: 29000 },
    { month: 'Jul', profit: 33000 },
    { month: 'Aug', profit: 31000 },
    { month: 'Sep', profit: 30000 },
    { month: 'Oct', profit: 34000 },
    { month: 'Nov', profit: 32000 },
    { month: 'Dec', profit: 35000 },
  ];
  
  // Sample responses for the sidebar
  const responseFormats = [
    { id: 1, title: "Lorem ipsum dolor sit amet conect", content: "Detailed text explanation about Ijara", type: "text", views: 24 },
    { id: 2, title: "Duis aute irure dolor in reprehenderit", content: "Statistical breakdown of Ijara contracts", type: "stats", views: 13 },
    { id: 3, title: "Purus in massa tempor nec", content: "Comparison with conventional leasing", type: "comparison", views: 4 },
    { id: 4, title: "Uma nec tincidunt praesent", content: "Legal requirements for Ijara", type: "legal", views: 20 },
    { id: 5, title: "Vulputate odio ut enim blandit", content: "Case studies of Ijara implementation", type: "cases", views: 16 },
    { id: 6, title: "Arcu ac tortor dignissim convallis", content: "Profit analysis of Ijara", type: "chart", views: 7 },
    { id: 7, title: "Convallis tellus id interdum", content: "Step-by-step Ijara process", type: "steps", views: 12 },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handleResponseClick = (response: { id: number; title: string; content: string; type: string; views: number }) => {
    setSelectedResponse(response as any);
    setSidebarOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto py-6 relative">
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
                  <CheckIcon className="h-5 w-5" />
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
            
            {/* Journal Entry Format UI based on screenshot */}
            <div className="mb-6">
              {/* First Journal Entry - Clickable */}
              <div 
                className="border rounded-lg p-4 mb-4 cursor-pointer hover:border-blue-300 transition-colors"
                onClick={() => handleResponseClick(responseFormats[0])}
              >
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">Action 1</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded">GPT 4</span>
                </div>
                <p className="font-medium mb-2">Lorem ipsum dolor sit amet conect</p>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud
                </p>
                <div className="flex justify-end mt-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
                    <CheckIcon className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
                    <PlusSquareIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Second Journal Entry - Clickable */}
              <div 
                className="border rounded-lg p-4 mb-4 cursor-pointer hover:border-blue-300 transition-colors"
                onClick={() => handleResponseClick(responseFormats[5])}
              >
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">Action 1</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded">GPT 4</span>
                </div>
                <p className="font-medium mb-2">Arcu ac tortor dignissim convallis</p>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud
                </p>
                <div className="flex justify-end mt-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
                    <CheckIcon className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
                    <PlusSquareIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Third Journal Entry - Clickable */}
              <div 
                className="border rounded-lg p-4 cursor-pointer hover:border-blue-300 transition-colors"
                onClick={() => handleResponseClick(responseFormats[2])}
              >
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">Action 1</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded">GPT 4</span>
                </div>
                <p className="font-medium mb-2">Purus in massa tempor nec</p>
                <div className="flex justify-end mt-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
                    <CheckIcon className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
                    <PlusSquareIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Input field at the bottom */}
            <div className="mt-4">
              <div className="relative">
                <textarea
                  className="w-full min-h-[100px] resize-none border rounded-md p-3 pr-12"
                  placeholder="How can I help you?"
                />
                <div className="absolute bottom-3 right-3 flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <BookPlusIcon className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <FileQuestionIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-gray-700 border rounded-md">
                    <PlusCircleIcon className="h-5 w-5" />
                  </button>
                </div>
                <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                  <SendIcon className="h-4 w-4" />
                  <span>Send message</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Right Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg border-l transform transition-transform duration-300 ease-in-out z-50">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-medium">Response Details</h3>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <XIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          <div className="p-4 overflow-y-auto h-full pb-20">
            {selectedResponse && (selectedResponse as { id: number }).id === 6 ? (
              <>
                {/* Chart view for profit analysis */}
                <h2 className="text-xl font-bold mb-2">Ijara Profit</h2>
                <div className="mb-4">
                  <div className="text-4xl font-bold text-center">35000</div>
                  <div className="text-sm text-gray-500 text-center">DZD/YEAR</div>
                </div>
                <div className="h-60 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis dataKey="month" hide />
                      <Tooltip />
                      <Bar dataKey="profit" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </>
            ) : (
              <>
                {/* Text view for other responses */}
                <h2 className="text-xl font-bold mb-2">{(selectedResponse as { title: string } | null)?.title || "Response Details"}</h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <EyeIcon className="h-4 w-4 mr-1" />
                  <span>{(selectedResponse as { views: number } | null)?.views || 0}</span>
                </div>
                <p className="text-gray-700">
                  {(selectedResponse as { content: string } | null)?.content || "Select a response to view details"}
                </p>
                
                {/* List of other available responses */}
                <div className="mt-6">
                  <h3 className="font-medium text-gray-700 mb-2">Other Responses</h3>
                  <div className="space-y-2">
                    {responseFormats.filter(r => r.id !== (selectedResponse as { id: number } | null)?.id).map(response => (
                      <div 
                        key={response.id}
                        className="p-3 border rounded-md cursor-pointer hover:bg-gray-50"
                        onClick={() => setSelectedResponse(response as any)}
                      >
                        <div className="flex justify-between items-center">
                          <p className="font-medium">{response.title}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <EyeIcon className="h-3 w-3 mr-1" />
                            <span>{response.views}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;