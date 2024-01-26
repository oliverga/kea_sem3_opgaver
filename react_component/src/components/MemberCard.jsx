import PropTypes from "prop-types";
import SecondaryButton from "./SecondaryButton";

function MemberCard({ memberName, memberRole }) {
  return (
    <div className="card">
      <div className="member-card">
        <img
          src="https://via.placeholder.com/40"
          alt="member"
          className="image"
        />
        <div className="member-name-role">
          <p className="name">{memberName}</p>
          <p className="role">{memberRole}</p>
        </div>
      </div>
      <div className="invite-plus-button">
        <SecondaryButton text="Invite" />
      </div>
    </div>
  );
}

MemberCard.propTypes = {
  memberName: PropTypes.string.isRequired,
  memberRole: PropTypes.string.isRequired,
};

export default MemberCard;
