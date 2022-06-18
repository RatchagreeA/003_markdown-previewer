import TextContext from "./TextContext";
import { useContext } from "react";

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
export default Editor;
