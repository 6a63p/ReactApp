import React, { useState } from "react";
import LoginForm from "./component/LoginForm";


function App() {
  const adminUser = {

    email: "lox@lox.com",
    password: 'lox'

  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Внедрение успешно");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Не наебешь!");
      setError("Не наебешь!");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" });
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>

        </div>
      ) : (

        <LoginForm Login={Login} error={error} />
      )}

    </div>
  );
}

export default App;
