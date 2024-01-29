import { useState, useEffect } from "react";

import { api } from "./../../services/api";
import "./Posts.scss";
import { PostCard } from "../../components";

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

  return (
    <div className="app__posts">
      {post.length &&
        post.map((item) => <PostCard key={item._id} item={item} />)}
      {!post.length && <h1>No article present.....</h1>}
    </div>
  );
};

export default Posts;
