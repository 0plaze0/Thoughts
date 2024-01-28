import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./CreatPost.scss";
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    [{ font: [] }], // fonts
    [{ size: ["12px", "14px", "16px", "18px", "20px"] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link"],
  ],
};

const formats = [
  "background",
  "bold",
  "color",
  "font",
  "code",
  "italic",
  "link",
  "size",
  "strike",
  "script",
  "underline",
  "header",
  "indent",
  "list",
  "align",
  "direction",
];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  console.log(content);
  return (
    <div className="app__createPost">
      <form className="app__createPost-form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle}
          placeholder="Title"
        />
        <label htmlFor="summary">summary</label>
        <input
          type="summary"
          name="summary"
          id="summary"
          value={summary}
          onChange={(e) => setSummary}
          placeholder="Summary"
        />
        <input type="file" />
        <ReactQuill
          className="app__createPost-content"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        />
        <button>Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
