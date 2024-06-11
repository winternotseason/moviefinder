import styled from "styled-components";
import Modal from "react-modal";
import PropTypes from "prop-types";

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
}) => {
  return (
    <Modal
      style={modalStyle}
      isOpen={ticketingnModalOpen}
      onRequestClose={() => {
        setTicketingModalOpen(false);
      }}
    >
      예매 모달
    </Modal>
  );
};

MovieTicketingnModal.propTypes = {
  setTicketingModalOpen: PropTypes.any.isRequired,
  ticketingnModalOpen: PropTypes.any.isRequired,
};

export default MovieTicketingnModal;
