import Modal from "react-modal";
import PropTypes from "prop-types";
import MovieSeatSelection from "../MovieSeatSelection";

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
  content: {
    zIndex: 1001,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    width: "80rem",
    height: "50rem",
  },
};

const MovieTicketingnModal = ({
  ticketingnModalOpen,
  setTicketingModalOpen,
  movie,
}) => {
  return (
    <Modal
      style={modalStyle}
      isOpen={ticketingnModalOpen}
      onRequestClose={() => {
        setTicketingModalOpen(false);
      }}
    >
      <MovieSeatSelection movie={movie} />
    </Modal>
  );
};

MovieTicketingnModal.propTypes = {
  setTicketingModalOpen: PropTypes.any.isRequired,
  ticketingnModalOpen: PropTypes.any.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    dec: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    drop: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MovieTicketingnModal;
