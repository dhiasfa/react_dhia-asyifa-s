import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.style.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const dummyUser = { username: "admin", password: "password123" };
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === username && user.password === password) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/landingPage");
    } else if (
      username === dummyUser.username &&
      password === dummyUser.password
    ) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("isLoggedIn", true);
      navigate("/landingPage");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="login-content">
          <form onSubmit={handleLogin}>
            <h2 className="text-center text-primary mb-4">Login</h2>
            <div className="form-content">
              <div className="col">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-content mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {errorMessage && (
              <div className="text-danger text-center mb-2">{errorMessage}</div>
            )}
            <div className="col d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
