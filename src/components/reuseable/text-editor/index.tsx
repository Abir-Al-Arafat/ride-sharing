import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

const TextEditor = ({ value, onChange }: Props) => {
  const modules = {
    toolbar: [
      // Group 1: Headings & Font Size
      [
        { header: [1, 2, 3, 4, 5, false] },
        { size: ["small", false, "large", "huge"] },
      ],

      // Group 2: Text formatting
      ["bold", "italic", "underline", "strike"],

      // Group 3: Color
      [{ color: [] }, { background: [] }],

      // Group 4: Script & Alignment
      [{ script: "sub" }, { script: "super" }],
      [{ align: [] }],

      // Group 5: Lists & Indent
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],

      // Group 6: Blocks
      ["blockquote", "code-block"],

      // Group 7: Link
      ["link"],

      // Group 8: Clear
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "align",
    "list",
    "indent",
    "blockquote",
    "code-block",
    "link",
    "clean",
  ];

  return (
    <div className="space-y-2">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className="min-h-[300px] rounded-md border border-gray-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
      />
    </div>
  );
};

export default TextEditor;
