import styles from "./Auth.module.css";
import { Link } from "react-router-dom";


const SignIn = () => {
  return (
    <>
      <div className={styles.AuthOuterCont}>
        <div className={styles.authCont}>
          <h1>Chat Application</h1>
          <h3>Sign In</h3>
          <form>
            <input type="email" placeholder="Enter Email" required />
            <input type="password" placeholder="Enter Password" required />
            <button>Sign In</button>
          </form>
          <p>Not  have an account ? <Link to = "/register" style={{textDecoration:"none"}}> Register</Link></p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
