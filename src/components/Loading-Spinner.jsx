import ScaleLoader from "react-spinners/ScaleLoader";
const LoadingSpinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <ScaleLoader color="#eeeeee" size={50} />
    </div>
  );
};

export default LoadingSpinner;
