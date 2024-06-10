import { Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import MovieSearchResult from "./pages/MovieSearchResult";
import Layout from "./pages/Layout";
import DetailMovie from "./pages/DetailMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<MovieSearchResult />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/movie" element={<DetailMovie />} />
      </Route>
    </Routes>
  );
}

export default App;
