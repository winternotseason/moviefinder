import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <Outlet />
      <Footer isSearchPage={false}/>
    </div>
  );
};

export default Layout;

/** <div className="w-full  max-w-[70rem] p-4 text-white/50 bg-slate-400">
          푸터 쓰쟈
        </div> */
