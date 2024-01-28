import "./Posts.scss";
import { image } from "../../constants";

const Posts = () => {
  return (
    <div className="app__posts">
      {[1, 2, 3].map((item) => (
        <div className="app__posts-container">
          <div className="app__posts-img">
            <img src={image.post1} alt="post" />
          </div>
          <div className="app__posts-text">
            <h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
              quibusdam!
            </h2>
            <div className="app__posts-info">
              <a className="app__posts-author" href="#">
                Lorem ipsum
              </a>
              <time>2024-01-24 22:36</time>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              praesentium voluptatibus cumque tenetur. Facere commodi
              architecto, vero sit, saepe cum ut ullam sunt qui, fuga dolores
              quaerat velit illum iure!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
