import PropTypes from "prop-types";

function SecondaryButton({ text }) {
  return (
    <button className="secondary-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-plus"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#666"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path>
        <path d="M5 12l14 0"></path>
      </svg>
      <p>{text}</p>
    </button>
  );
}

SecondaryButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SecondaryButton;
