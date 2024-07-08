import Text from "../components/text";
import SectionDescriptor from "../components/sectiondescriptor";
export default function Features() {
  const SECTIONS = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];
  const GridColumns = `grid-cols-${SECTIONS.length}`;
  return (
    <section>
      <SectionDescriptor
        title="Features"
        description="Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go."
      />
      <div>
        <ul
          id="features"
          className={`grid  grid-cols-1 md:${GridColumns}  relative  w-3/4 mx-auto text-center`}
        >
          {SECTIONS.map((element) => {
            return (
              <li
                key={element}
                className="p-7 relative mt-10 text-2xl text-gray-500 cursor-pointer hover:text-black transition-all duration-200 ease-in-out selector"
              >
                {element}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
