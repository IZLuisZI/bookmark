export default function Button({
  buttonName,
  color,
  hoverStatus,
  outlineStatus,
  bg,
  text,
  shadow,
  hover,
}) {
  return (
    <button
      className={`${color} ${hoverStatus} ${
        outlineStatus ? outlineStatus : ``
      }  py-2 px-7 rounded-md transition-all duration-200 ease-in-out
        ${bg} ${text}   ${
        shadow ? " shadow-gray-300 shadow-lg" : ""
      } text-nowrap ${hover}`}
    >
      {buttonName}
    </button>
  );
}
