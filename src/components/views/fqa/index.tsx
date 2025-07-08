import { useEffect, useRef, useState } from "react";
import { useTitle } from "../../../hooks/title";
import { ChevronDown, ChevronUp, SquarePen, Trash2 } from "lucide-react";
import { Button } from "../../ui";
import Modal from "../../reuseable/modal";

const questionsData = [
  {
    title: "Sign Up and Onboard",
    content:
      "Create your account and set up your first campaign with ease. Our user-friendly interface and guided setup process make it simple to get started.",
  },
  {
    title: "Recruit Affiliates",
    content:
      "Launch your advertising campaigns across various channels. Whether you're focusing on display ads, social media, or search, Affity supports all major advertising platforms.",
  },
  {
    title: "Track and Optimize",
    content:
      "Monitor your campaigns in real-time and use our advanced analytics to optimize performance. Make data-driven decisions to enhance your ROI.",
  },
  {
    title: "Scale Your Efforts",
    content:
      "As you refine your strategy, scale your campaigns to reach a larger audience. Affity provides the tools you need to grow your advertising efforts successfully.",
  },
];

export default function FQA() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setIsOpen] = useState(false);

  const toggleAccordion = (index: number) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };
  const { setTitle, setSubtitle, title, subtitle } = useTitle();

  useEffect(() => {
    setTitle("FAQ");
    setSubtitle("You can see the FAQ section of your app from here");
  }, [setTitle, setSubtitle]);

  return (
    <div>
      <ul className="lg:hidden mb-3">
        <li className="text-2xl font-bold text-primary">{title}</li>
        <li className="text-sm text-gray-600">{subtitle}</li>
      </ul>

      <div className="py-5" ref={containerRef}>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full">
            {questionsData.map((item, index) => (
              <div key={index} className="flex">
                <div className="py-[10px] px-5 mb-4 bg-white rounded-md cursor-pointer w-full">
                  <div
                    className="flex items-center justify-between"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4 className="text-base font-medium text-[#1B1B1B]">
                      {item.title}
                    </h4>
                    <span>
                      {activeAccordion === index ? (
                        <ChevronUp
                          size={27}
                          className="bg-[#F0F0F0] text-primary rounded-full p-1"
                        />
                      ) : (
                        <ChevronDown
                          size={27}
                          className="bg-[#F0F0F0] text-primary rounded-full p-1"
                        />
                      )}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      activeAccordion === index ? "max-h-full" : "max-h-0"
                    }`}
                    style={{
                      maxHeight: activeAccordion === index ? "500px" : "0px",
                    }}
                  >
                    <p className="text-sm lg:text-base mt-1">{item.content}</p>
                  </div>
                </div>
                <div className="ml-2 w-32 flex gap-2">
                  <h1 className="bg-[#E4FFEB] py-4 px-4 h-fit rounded-sm cursor-pointer">
                    <SquarePen
                      onClick={() => setIsOpen(!open)}
                      size={16}
                      className="text-[#28A745]"
                    />
                  </h1>
                  <h1 className="bg-[#FFE5E5] py-4 px-4 h-fit rounded-sm cursor-pointer">
                    <Trash2 size={16} className="text-[#FF0000]" />
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button variant={"main"} className="px-12">
          Add More
        </Button>
        <div>
          {/* Dialog Box */}
          <div className="bg-white rounded-lg shadow-2xl p-3 max-w-sm relative mt-4">
            {/* Triangle pointer */}
            <div className="absolute -top-2 right-5 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

            {/* Dialog Content */}
            <div className="flex items-center mb-2">
              {/* Warning Icon */}
              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-white font-bold text-sm">!</span>
              </div>

              {/* Dialog Text */}
              <span className="text-gray-800 text-sm">
                Are you sure to delete this driver ?
              </span>
            </div>

            {/* Dialog Buttons */}
            <div className="flex justify-end gap-2">
              <button className="px-3 py-1 cursor-pointer border border-gray-300 bg-white text-gray-700 text-sm rounded hover:bg-gray-50">
                No
              </button>
              <button className="px-3 py-1 bg-red-600 cursor-pointer text-white text-sm rounded border border-red-600">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <Modal open={open} setIsOpen={setIsOpen} className="lg:max-w-[530px] p-4">
        <h1 className="text-xl">Add new question</h1>
      </Modal>
    </div>
  );
}
