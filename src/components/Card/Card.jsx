import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <li className="card w-25">
      <img className="card-img" src={item.avatar} alt={item.first_name} />
      <div className="card-body">
        <h3 className="card-title">{item.first_name + " " + item.last_name}</h3>
        <p className="card-text">Email: {item.email}</p>
        <Link className="btn btn-primary" to={`/users/${item.id}`}>
          view posts
        </Link>
      </div>
    </li>
  );
};
