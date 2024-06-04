import PropTypes from "prop-types";

const JoinModal = ({ setLoginOpen }) => {
  return (
    <div>
      회원가입 창!!
      <button
        onClick={() => {
          setLoginOpen(true);
        }}
      >
        로그인
      </button>
    </div>
  );
};

JoinModal.propTypes = {
  setLoginOpen: PropTypes.func.isRequired,
};

export default JoinModal;
