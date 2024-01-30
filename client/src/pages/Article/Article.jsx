import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { UserContext } from "./../../context/userContext";
import { api } from "../../services/api";
import { format } from "date-fns";
import "./Article.scss";

const Article = () => {
  const [data, setData] = useState({});
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get(`/post/${id}`);
        if (result.status == 200) {
          setData(result.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/edit/${id}`);
  };

  return (
    <div className="app__article">
      <div className="app__article-container">
        <h2>{data.title}</h2>
        <div className="app__article-info">
          <p>@{data?.author?.username}</p>

          <time>
            {format(
              new Date(data?.createdAt || "1999-01-01 00:00"),
              "dd-mm-yyyy HH:mm"
            )}
          </time>
        </div>
        {userInfo.id === data?.author?._id && (
          <button className="app__article-edit" onClick={handleEdit}>
            Edit
          </button>
        )}
        <div className="app__article-img">
          <img src={`http://localhost:5555/${data.cover}`} alt="photo" />
        </div>
        <div className="app__article-text">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </div>
  );
};

export default Article;
