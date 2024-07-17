import ScaleLoader from "react-spinners/ScaleLoader";
import PropTypes from "prop-types";

const LoadingSpinner = ({color}) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <ScaleLoader color={color} size={50} />
    </div>
  );
};

export default LoadingSpinner;

LoadingSpinner.propTypes = {
    color: PropTypes.string.isRequired,
  };
  