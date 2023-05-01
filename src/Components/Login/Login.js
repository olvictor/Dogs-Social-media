import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import PasswordLost from "./PasswordLost";
import PasswordReset from "./PasswordReset";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
import PageNotFound from "../../PageNotFound";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.form}>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="criar" element={<LoginCreate />}></Route>
          <Route path="/perdeu" element={<PasswordLost />}></Route>
          <Route path="/resetar" element={<PasswordReset />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
