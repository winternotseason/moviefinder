import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <Outlet />
      <div className="flex items-end grow text-sm justify-center p-10 bg-navy">
        <div className="text-white w-full max-w-[70rem]">
          <div>깃허브</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

/** <div className="w-full  max-w-[70rem] p-4 text-white/50 bg-slate-400">
          푸터 쓰쟈
        </div> */
