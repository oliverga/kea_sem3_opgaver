import PrimaryButton from "./PrimaryButton.jsx";

function SignupForm() {
  return (
    <form className="signup-form" action="">
      <input placeholder="Enter an email" type="email" id="email" />
      <PrimaryButton text="Send invite" />
    </form>
  );
}

export default SignupForm;
