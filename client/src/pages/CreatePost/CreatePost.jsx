import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { api } from "./../../services/api";

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
  const [file, setFile] = useState(null);

  const createPost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("title", title);
    data.set("content", content);
    data.set("file", file[0]);
    try {
      const result = await api.post("/post", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app__createPost">
      <form className="app__createPost-form" onSubmit={createPost}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <label htmlFor="summary">summary</label>
        <input
          type="summary"
          name="summary"
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Summary"
        />
        <input type="file" onChange={(e) => setFile(e.target.files)} />
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
