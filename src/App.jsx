import { Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import './index.css'

import Layout from "./pages/Layout";
import Detail from "./pages/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
