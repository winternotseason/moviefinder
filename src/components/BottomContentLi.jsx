import PropTypes from "prop-types";

const BottomContentLi = ({ bottomContent, setBottomContent, children,link }) => {
  return (
    <li
      className={
        bottomContent === link
          ? `w-1/2 border-b-2 border-black/50 text-center py-3 cursor-pointer`
          : `w-1/2 text-center py-3 cursor-pointer`
      }
      onClick={() => {
        setBottomContent(link);
      }}
    >
      {children}
    </li>
  );
};

export default BottomContentLi;

BottomContentLi.propTypes = {
  bottomContent: PropTypes.string.isRequired,
  setBottomContent: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  link : PropTypes.string.isRequired
};
