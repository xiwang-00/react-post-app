import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Home, Users, Blog } from "./pages";
import { Routes, Route } from "react-router-dom";
import { SinglePage } from "./pages/SinglePage/SinglePage";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<SinglePage />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
