import "./Heading.scss";

export default function Heading(props: { content: string }) {
  return <h1 className="heading heading--primary">{props.content}</h1>;
}
