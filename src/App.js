import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Previewer from "./Previewer";
import "./index.css";

function App() {
  const [textArea, setTextArea] = useState(
    "# Welcome to my React Markdown Previewer! \n\n" +
      "Here is how to use it: \n\n" +
      "- Type stuff in the text Editor\n" +
      "- See the live updates on the Previewer\n\n" +
      "## Other neat stuff you can use with Markdown\n" +
      "Here is how you can format your text: **bold**, _italic_, ~~cross~~ \n\n" +
      "You can make code in line `<div></div>`\n\n" +
      "You can also make a block code:\n" +
      "```\n//this is a very cool function \n" +
      "function foo(bar){ \n    return bar\n} \n```" +
      "\nHere is a block quote \n >Block Quote!\n\n" +
      "Here is how to add an image " +
      "![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207)\n" +
      "you can learn more at [marked](https://marked.js.org/)"
  );

  const handleChange = (event) => {
    setTextArea(event.target.value);
  };

  return (
    <main className="container">
      <h1 className="title">Markdown Previewer</h1>
      <div className="grid">
        <div>
          <h2 className="subtitle">Editor</h2>
          <TextareaAutosize
            id="editor"
            className="editor"
            value={textArea}
            onChange={handleChange}
          />
        </div>
        <div>
          <h2 className="subtitle">Previewer</h2>
          <Previewer text={textArea} />
        </div>
      </div>
    </main>
  );
}

export default App;
