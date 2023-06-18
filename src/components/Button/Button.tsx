import "./Button.scss";

export default function Button(props: { content: string }) {
  return <button className="button button--primary">{props.content}</button>;
}
