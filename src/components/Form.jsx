import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
function Form(props) {
  const cardClass = props.cardClass;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/exam-portal");
    }
  }, []);
  async function login() {
    console.warn(email, password);
    let item = { email, password };
    localStorage.setItem("user-info", JSON.stringify(item));
    history.push("/exam-portal");
  }
  return (
    <div className="main">
      <div className="container">
        <div class={cardClass}>
          <div class="card-body">
            <h5 class="card-title">{props.greet}</h5>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" onClick={login} class="btn btn-info">
                LogIn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
