import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DetailLink = ({moviename,releaseDt}) => {
  return (
    <Link
      to={`/detail?moviename=${moviename}&release=${releaseDt}`}
      className="mt-3 md:mt-5 border-[1px] rounded-3xl font-light text-xs md:text-sm flex w-16 md:w-20 h-6 md:h-8 justify-center items-center py-1 md:py-2 px-2 md:px-3 border-white/70 text-white/70 hover:border-white/90 hover:text-white/90 cursor-pointer"
    >
      상세보기
    </Link>
  );
};

export default DetailLink;

DetailLink.propTypes = {
    moviename: PropTypes.string.isRequired,
    releaseDt : PropTypes.string.isRequired,
  };
  