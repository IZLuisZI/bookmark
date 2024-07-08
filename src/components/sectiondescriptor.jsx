import Text from "./text";
export default function SectionDescriptor({ title, description }) {
  return (
    <div className="text-center mt-32">
      <h2 className=" mb-8 font-medium text-6xl text-wrap text-slate-800">
        {title}
      </h2>
      <div className="md:w-1/2 md:mx-auto">
        <Text text={description} />
      </div>
    </div>
  );
}
