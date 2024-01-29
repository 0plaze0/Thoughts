import { format } from "date-fns";
import "./PostCard.scss";

const PostCard = ({ item }) => {
  return (
    <div className="app__posts-container">
      <div className="app__posts-img">
        <img src={"http://localhost:5555/" + item.cover} alt="post" />
      </div>
      <div className="app__posts-text">
        <h2>{item.title}</h2>
        <div className="app__posts-info">
          <a className="app__posts-author" href="#">
            {item.author.username}
          </a>
          <time>{format(new Date(item.createdAt), "dd-mm-yyyy HH:mm")}</time>
        </div>
        <p>{item.summary}</p>
      </div>
    </div>
  );
};

export default PostCard;
