import SignupForm from "./SignupForm.jsx";

function Header() {
  return (
    <div className="header">
      <div className="header-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-users"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#666"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
        </svg>
        <h2>Add team members</h2>
        <p>
          You havent added any team members yet. As the owner of this project,
          you can add up to 5 people to your team.
        </p>
      </div>
      <SignupForm />
    </div>
  );
}

export default Header;
