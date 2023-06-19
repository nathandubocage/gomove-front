import "./Heading.scss";

export default function Heading(props: { content: string }) {
  const contentHtml = props.content.replace("\n", "<br/>");

  return (
    <h1
      className="heading heading--primary"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
