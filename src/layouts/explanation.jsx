import Hero1 from "../assets/images/illustration-features-tab-1.svg";
import Button from "../components/button.jsx";
import Text from "../components/text.jsx";
export default function MainContent() {
  const BUTTONS = ["More Info"];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 my-40 gap-4 pb-20 overflow-hidden ">
      <article className="relative flex justify-center ">
        <figure>
          <img
            src={Hero1}
            data-hero="hero"
            alt="hero icon"
            className="aspect-auto "
          />
        </figure>
        <div className="absolute h-1/2 w-full bg-blue-600 top-1/2 right-1/2 rounded-r-full translate-y-14 -z-10"></div>
      </article>
      <article className="md:pl-12 relative">
        <h2 className="mt-28 mb-10 text-center md:text-left  md:mt-10 md:mb-10 font-medium text-5xl text-wrap text-slate-800">
          Bookmark in one click
        </h2>
        <Text text="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites." />
        <div className="flex justify-center md:justify-start gap-5 my-10 text-gray-500 font-medium">
          {BUTTONS.map((buttonName) => (
            <Button
              buttonName={buttonName}
              key={buttonName}
              color=""
              bg="bg-blue-600"
              text="text-white"
              hover="hover:bg-white hover:ring-2 hover:ring-blue-600 hover:text-blue-600"
            />
          ))}
        </div>
      </article>
    </section>
  );
}
