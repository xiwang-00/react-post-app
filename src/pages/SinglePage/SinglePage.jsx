import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PostCard } from "../../components/PostCard/PostCard";

export const SinglePage = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
      });

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [id]);

  return (
    <div>
      
      <h2 className="text-center my-5">SinglePage</h2>
      <div className="row">
        <div className="col-3">
          <div className="card">
            <img className="card-img" src={user.avatar} alt={user.first_name} />
            <div className="card-body">
              <h3 className="card-title">
                {user.first_name + " " + user.last_name}
              </h3>
              <p className="card-text">Email: {user.email}</p>
            </div>
          </div>
        </div>
        <div className="col-9">
          {posts.map((item) => (
            <PostCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
