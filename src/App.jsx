import { Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
