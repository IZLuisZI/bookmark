import SectionDescriptor from "../components/sectiondescriptor";
import BrowserCard from "../components/browsercard";
import BgDots from "../assets/images/bg-dots.svg";
import Chrome from "../assets/images/logo-chrome.svg";
import Firefox from "../assets/images/logo-firefox.svg";
import Opera from "../assets/images/logo-opera.svg";
import { version } from "react";
import Button from "../components/button";
export default function ExtensionProducts() {
  const BROWSERS = [
    {
      name: "Chrome",
      logo: Chrome,
      version: "62",
    },
    {
      name: "Firefox",
      logo: Firefox,
      version: "55",
    },
    {
      name: "Opera",
      logo: Opera,
      version: "46",
    },
  ];
  return (
    <section>
      <SectionDescriptor
        title="Extension Products"
        description="We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize."
      />
      <div className=" w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3  p-7 gap-10">
        {BROWSERS.map((browser, index) => {
          return (
            <article
              style={{ marginTop: `${index * 50}px` }} // Inline style for precise margin-top
              className="flex items-center gap-4 h-max py-10 flex-col shadow-slate-300 shadow-lg rounded-md"
            >
              <img className="size-32" src={browser.logo} alt={browser.name} />
              <h3 className="text-2xl font-medium">Add to {browser.name}</h3>
              <p className="text-gray-400">Minimum version {browser.version}</p>
              <div className="w-full">
                <img src={BgDots} alt="Background Dots" className="w-full" />
              </div>
              <Button
                buttonName="Add & Install Extension"
                bg="bg-blue-600"
                color="text-white"
                hover="hover:bg-white hover:ring-2 hover:ring-blue-600 hover:text-blue-600"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
