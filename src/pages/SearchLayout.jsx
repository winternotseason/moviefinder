import { Outlet } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";
import Footer from "../components/Footer";

const SearchLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SearchHeader />
      <Outlet />
      <Footer isSearchPage={true} />
    </div>
  );
};

export default SearchLayout;
