import PropTypes from "prop-types";

const TopContentLi = ({ topContent, setTopContent, children,link }) => {
  return (
    <li
      className={
        topContent === link
          ? `w-1/3 border-b-2 border-black/50 text-center py-3 cursor-pointer`
          : `w-1/3 text-center py-3 cursor-pointer`
      }
      onClick={() => {
        setTopContent(link);
      }}
    >
      {children}
    </li>
  );
};

export default TopContentLi;

TopContentLi.propTypes = {
  topContent: PropTypes.string.isRequired,
  setTopContent: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  link : PropTypes.string.isRequired
};
