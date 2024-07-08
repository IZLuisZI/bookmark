import SectionDescriptor from "../components/sectiondescriptor";
import arrow from "../assets/images/icon-arrow.svg";
import { useState } from "react";
import Text from "../components/text";
import Button from "../components/button";

export default function Faq() {
  const faqs = [
    {
      question: "What is Bookmark?",
      answer:
        "Bookmark is a service that lets you save your favorite sites and manage them with ease.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "You can send us an email and we'll get back to you as soon as possible.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Yes! We have an Android and iOS app. You can find them on the Google Play Store and the App Store.",
    },
    {
      question: "What about other Chromium browsers?",
      answer: "We're working on it. We'll keep you updated on our progress.",
    },
  ];

  // Change to track the index of the open accordion
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle opening/closing accordions
  function handleState(index) {
    // If the same accordion is clicked again, close it, otherwise open the clicked one
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section>
      <SectionDescriptor
        title="Frequently Asked Questions"
        description="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      />
      <div className="my-20 w-full md:w-3/5 mx-auto">
        {faqs.map((faq, index) => {
          // Determine if the current accordion is open
          const isOpen = index === openIndex;
          return (
            <div className="parent relative" key={index}>
              <div
                className="flex items-center justify-between py-4 cursor-pointer"
                onClick={() => handleState(index)} // Pass the index to handleState
              >
                <p className="text-2xl child">{faq.question}</p>
                <img
                  src={arrow}
                  className={`transition-all duration-200 ease-in-out w-5 h-3 ${
                    isOpen ? `rotate-180` : ``
                  }`}
                  alt="arrow"
                />
              </div>
              <div
                className={`${
                  isOpen ? `scale-y-100 h-full` : `scale-y-0 h-0`
                } transition-all duration-200 ease-in-out origin-top`}
              >
                <Text size={`text-base`} text={faq.answer} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <Button
          buttonName="More Info"
          bg="bg-blue-600"
          color="text-white"
          hover="hover:bg-white hover:ring-2 hover:ring-blue-600 hover:text-blue-600"
        />
      </div>
    </section>
  );
}
