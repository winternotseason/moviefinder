import { Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";

import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
