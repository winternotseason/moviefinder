import { Outlet } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";

const SearchLayout = () => {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
};

export default SearchLayout;
