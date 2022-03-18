import { marked } from "marked";

function Previewer(props) {
  const { text } = props;

  marked.setOptions({ breaks: true });

  const getMarkdownText = () => {
    const rawMarkup = marked(text);
    return { __html: rawMarkup };
  };
  return (
    <div
      id="preview"
      className="preview"
      dangerouslySetInnerHTML={getMarkdownText()}></div>
  );
}

export default Previewer;
