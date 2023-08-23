import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [user, setUser] = useState<any>([]);

  const handleSubmit = () => {
    let newuser = {
      email: email,
      password: password,
    };
    setUser([...user, newuser]);
  };

  return (
    <div className="App">
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br></br>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSubmit}>kmk</button>

      {user.map((x: any) => {
        return <h1>{x.email}</h1>;
      })}
    </div>
  );
}

export default App;
