import Main from "../components/Main/Main";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Main />
    </div>
  );
};

export default Home;
