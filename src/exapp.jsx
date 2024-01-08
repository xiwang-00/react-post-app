import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Input = () => {
  return <input type="text" placeholder="Text me" />;
};

function exapp() {
  const data = ["title1", "title2", "title3"];

  const [show, setShow] = useState(false);

  // Shartli chiqarish/chizish / conditional rendering

  const Batching = (user) => {
    if (!user) {
      return <h2>User not Found</h2>;
    } else {
      return <h2>{user}</h2>;
    }
  };

  const earlyExits = (username) => {
    if (!username) return;

    return <h2>{username}</h2>;
  };

  const shortCircuit = (admin) => {
    return admin && <h2>Hello admin</h2>;
  };

  const Ternary = (show) => {
    return show ? <h2>show</h2> : "";
  };

  return (
    <>
      <h1 className="text-center">Hello world</h1>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <button onClick={() => setShow(!show)}>SHOW</button>

      {show && <Input />}
    </>
  );
}

export default App;
