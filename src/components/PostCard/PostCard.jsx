export const PostCard = ({ title, body }) => {
  return (
    <li className="card mb-5">
      <h4 className="card-header">{title}</h4>
      <div className="card-body">
        <p className="card-text">{body}</p>
      </div>
    </li>
  );
};
