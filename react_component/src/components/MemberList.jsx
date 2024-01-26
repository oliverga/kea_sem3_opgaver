import MemberCard from "./MemberCard";

function MemberList() {
  return (
    <div className="member-list">
      <h3>Team members previously added to projects</h3>
      <div className="member-column">
        <MemberCard memberName="Jon Wilson" memberRole="Filmmaker" />
        <MemberCard
          memberName="Nathan Fielder"
          memberRole="Business Consultant"
        />
      </div>
    </div>
  );
}

export default MemberList;
