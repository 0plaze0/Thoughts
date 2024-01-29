import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { format } from "date-fns";
import "./Article.scss";

const Article = () => {
  const [data, setData] = useState({});

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

  return (
    <div className="app__article">
      <div className="app__article-container">
        <div className="app__article-img">
          <img src={`http://localhost:5555/${data.cover}`} alt="photo" />
        </div>
        <div className="app__article-text">
          <h2>{data.title}</h2>
          <div className="app__article-info">
            <p>{data?.author?.username}</p>

            <time>
              {format(
                new Date(data?.createdAt || "1999-01-01 00:00"),
                "dd-mm-yyyy HH:mm"
              )}
            </time>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </div>
  );
};

export default Article;
