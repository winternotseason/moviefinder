import { Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import "./index.css";

import Layout from "./pages/Layout";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import SearchLayout from "./pages/SearchLayout";
import List from "./pages/List";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Notfound />} />
      </Route>
      <Route path="/search" element={<SearchLayout />}>
        <Route index element={<Search />} />
        <Route path="/search/list" element={<List />} />
      </Route>
    </Routes>
  );
}

export default App;
