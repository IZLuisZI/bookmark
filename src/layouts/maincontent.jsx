import Demonstration from "../assets/images/illustration-hero.svg";
import Button from "../components/button.jsx";
import Text from "../components/text.jsx";
import SectionDescriptor from "../components/sectiondescriptor.jsx";
export default function MainContent() {
  const BUTTONS = [
    {
      name: "Get it on Chrome",
      backgroundColor: "bg-blue-600",
      shadow: false,
      color: "text-white",
      hover:
        "hover:bg-white hover:ring-2 hover:ring-blue-600 hover:text-blue-600",
    },
    {
      name: "Get it on Firefox",
      backgroundColor: "bg-gray-300",
      shadow: true,
      color: "text-gray-800",
      hover:
        "hover:bg-white hover:ring-2 hover:ring-gray-600 hover:text-gray-600",
    },
  ];
  //   "Get it on Chrome", "Get it on Firefox"
  return (
    <section className="relative  overflow-hidden grid grid-cols-1 md:grid-cols-2 my-40">
      <article className="p-1">
        <h1 className="my-16 text-center md:text-left font-medium text-5xl md:text-6xl text-wrap text-slate-800">
          A Simple Bookmark Manager
        </h1>
        <Text
          text="A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free."
          align="text-center md:text-left"
        />
        <div className="flex gap-5 my-10 justify-center md:justify-start text-gray-500 font-medium">
          {BUTTONS.map((button) => {
            return (
              <Button
                buttonName={button.name}
                key={button.name}
                color={button.color ? button.color : ""}
                bg={button.backgroundColor}
                shadow={button.shadow}
                hover={button.hover}
              />
            );
          })}
        </div>
      </article>
      <article className="relative -order-1 md:order-1">
        <figure>
          <img
            src={Demonstration}
            alt="hero icon"
            className="aspect-auto h-full w-full"
          />
        </figure>
        <div className="absolute h-1/2 w-3/4 bg-blue-600 top-1/2 left-1/2 rounded-l-full -z-10"></div>
      </article>
    </section>
  );
}
