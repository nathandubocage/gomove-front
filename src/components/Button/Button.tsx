import "./Button.scss";

export default function Button(props: { content: string, onClick?: () => void }) {
  return <button className="button button--primary" onClick={props.onClick}>{props.content}</button>;
}
