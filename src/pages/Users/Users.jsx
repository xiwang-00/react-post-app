import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Card } from "../../components/Card";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUsers(data.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setUsers([]);
        setError(err);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center my-5">Users</h2>
      {loading && <Loading />}
      {error && <h3 className="text-center text-danger">Error</h3>}
      {!users.length && !loading ? (
        <h3>Userlar topilmadi</h3>
      ) : (
        <ul className="d-flex gap-5 flex-wrap justify-content-center">
          {users.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};
