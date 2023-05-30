import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor } from "@ckeditor/ckeditor5-core";
import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import HeadingPlugin from "@ckeditor/ckeditor5-heading/src/heading";
import ListPlugin from "@ckeditor/ckeditor5-list/src/list";
import BlockQuotePlugin from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import UndoPlugin from "@ckeditor/ckeditor5-undo/src/undo";
// import RedoPlugin from "@ckeditor/ckeditor5-undo/src/redo";

// Custom editor build
class CustomEditorBuild extends ClassicEditor {}

// Register plugins with the editor
CustomEditorBuild.builtinPlugins = [
  Editor,
  EssentialsPlugin,
  BoldPlugin,
  ItalicPlugin,
  LinkPlugin,
  HeadingPlugin,
  ListPlugin,
  BlockQuotePlugin,
  UndoPlugin,
  // RedoPlugin,
];

const configuration = {
  toolbar: [
    "heading",
    '|',
    "bold",
    "italic",
    "|",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote",
    "undo",
    "redo",
  ],
};

function App() {
  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        // editor={ClassicEditor}
        editor={CustomEditorBuild}
        config={configuration}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
}

export default App;
