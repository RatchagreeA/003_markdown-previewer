import TextContext from "./TextContext";
import { marked } from "marked";
import { useContext } from "react";

marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();

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
export default Preview;
