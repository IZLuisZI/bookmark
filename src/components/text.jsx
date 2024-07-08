export default function Text({ text, size, align }) {
  return (
    <p className={`${align} text-2xl text-gray-400 leading-9 ${size}`}>
      {text}
    </p>
  );
}
