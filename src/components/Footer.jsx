import PropTypes from "prop-types";
import logo from "/moviefinder-logo.png";
import github from "/github.svg";
import kakao from "/kakao.svg";
import { Link } from "react-router-dom";

const Footer = ({isSearchPage}) => {
  return (
    <div className={isSearchPage ? `flex items-end grow justify-center px-10 pt-20 bg-black/60`: `flex items-end grow justify-center px-10 pt-20 bg-navy`}>
      <div className="text-white/70 w-full max-w-[70rem]">
        <div className="flex border-b-[1px] border-white/15 pb-5">
          <div>
            <p className="text-sm md:text-lg mb-1 font-bold">Developer.</p>
            <p className="font-light md:text-sm text-[0.6rem]">Hwang Seoyeon</p>
          </div>
          <div className="ml-14">
            <p className="md:text-lg mb-1 font-bold">Data Source</p>
            <p className="font-light text-[0.6rem] md:text-sm">KMDB - 한국영화데이터베이스</p>
            <p className="font-light text-[0.6rem] md:text-sm">
              KOBIS - 영화상영관입장권통합전산망
            </p>
          </div>
        </div>
        <div className="flex justify-between pt-5 pb-10">
          {/* 로고 */}
          <div className="w-20">
            <img src={logo} />
          </div>
          {/* 깃허브, 오픈카톡 */}
          <div className="">
            <div>
              <Link
                to="https://github.com/winternotseason/moviefinder"
                target="_blank"
                className="flex items-center"
              >
                <div className="w-4">
                  <img src={github} />
                </div>
                <p className="ml-2 text-[0.6rem] md:text-sm">Github</p>{" "}
              </Link>
            </div>
            <div className="mt-2">
              <Link
                to="https://open.kakao.com/o/syobaDDg"
                target="_blank"
                className="flex items-center"
              >
                <div className="w-4">
                  <img src={kakao} />
                </div>
                <p className="ml-2 text-[0.6rem] md:text-sm">Kakao</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
    isSearchPage: PropTypes.bool.isRequired,
  };
  