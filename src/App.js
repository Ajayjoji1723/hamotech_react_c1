import { Routes, Route } from "react-router-dom";
import Users from "./components/Users/index";
import Contacts from "./components/contactApp/Contacts";
import Projects from "./components/projects/Projects";
import Blogs from "./components/ApiCall";
import Header from "./components/ApiCall/Header";
import BlogDetail from "./components/ApiCall/BlogDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/blog/detail/:id" element={<BlogDetail />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
