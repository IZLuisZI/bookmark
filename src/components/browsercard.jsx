import Button from "./button";
export default function BrowserCard({ title, description, image }) {
  return (
    <article>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button buttonName="Add & Install Extension" />
    </article>
  );
}
