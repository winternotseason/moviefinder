import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const SearchLayout = () => {
  return (
    <>
      <div className="flex justify-between items-center h-12 p-3 bg-white border-b-[1px]">
        <Link to="/">
          dd
        </Link>
        <p>통합검색</p>
        <p></p>
      </div>
      <Outlet />
    </>
  );
};

export default SearchLayout;
