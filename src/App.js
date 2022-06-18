import "./App.scss";
import React, { useState, useEffect, useContext } from "react";
import { marked } from "marked";
// import TextContext from "./component/TextContext";
// import Editor from "./component/Editor";
// import Preview from "./component/Preview";

function App() {
    const [inputText, setInputText] = useState(initText);
    const [previewText, setPreviewText] = useState("");

    useEffect(() => {
        setPreviewText(inputText);
    }, [inputText, previewText]);
    return (
        <TextContext.Provider
            value={{
                inputText: inputText,
                setInputText: setInputText,
                previewText: previewText,
                setPreviewText: setPreviewText,
            }}
        >
            <div className="App">
                <div className="title-wrapper">
                    <h1 className="title">Markdown Previewer</h1>
                </div>
                <div className="items-wrapper">
                    <div className="editor-wrapper">
                        <ToolBar
                            icon={"fa fa-arrows-alt"}
                            onClick={"xx"}
                            text="Editor"
                        />
                        <Editor />
                    </div>
                    <div className="preview-wrapper">
                        <ToolBar
                            icon={"fa fa-compress"}
                            onClick={"xx"}
                            text="Previewer"
                        />
                        <Preview />
                    </div>
                </div>
            </div>
        </TextContext.Provider>
    );
}

export default App;

marked.setOptions({
    breaks: true,
});
const renderer = new marked.Renderer();
const TextContext = React.createContext();

function ToolBar(props) {
    return (
        <div className="tool-bar">
            {props.text}
            <i className={props.icon}></i>
        </div>
    );
}

function Editor() {
    const text = useContext(TextContext);
    return (
        <textarea
            id="editor"
            type="text"
            value={text.inputText}
            onChange={(e) => text.setInputText(e.target.value)}
        />
    );
}
function Preview() {
    const text = useContext(TextContext);
    return (
        <div
            id="preview"
            dangerouslySetInnerHTML={{
                __html: marked(text.previewText, { renderer: renderer }),
            }}
        ></div>
    );
}

const initText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
