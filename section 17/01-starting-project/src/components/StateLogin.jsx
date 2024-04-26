import { useRef, useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("User email: " + enteredEmail);
    // console.log("User password: " + enteredPassword);
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log(enteredEmail, enteredPassword);
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  // function handleInputChange(identifier, event) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: event.target.value,
  //   }));

  //   console.log(enteredValues);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
            // onChange={handleEmailChange}
            // onChange={(event) => handleInputChange("email", event)}
            // value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
            // onChange={handlePasswordChange}
            // onChange={(event) => handleInputChange("password", event)}
            // value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
