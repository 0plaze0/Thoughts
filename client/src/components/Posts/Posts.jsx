import { useState, useEffect } from "react";
import { format } from "date-fns";

import { api } from "./../../services/api";
import "./Posts.scss";
import { image } from "../../constants";

const Posts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get("/post");

        if (result) setPost(result.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  console.log(post);
  return (
    <div className="app__posts">
      {post.map((item, index) => (
        <div className="app__posts-container" key={index}>
          <div className="app__posts-img">
            <img src={image.post1} alt="post" />
          </div>
          <div className="app__posts-text">
            <h2>{item.title}</h2>
            <div className="app__posts-info">
              <a className="app__posts-author" href="#">
                Lorem ipsum
              </a>
              <time>
                {format(new Date(item.createdAt), "dd-mm-yyyy HH:mm")}
              </time>
            </div>
            <p>{item.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
