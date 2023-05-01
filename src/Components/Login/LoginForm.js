import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import UseForm from "../../Hooks/UseForm";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import styleBtn from "../Forms/Button.module.css";
import Head from "../Helper/Head";

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();

  const { userLogin, loading, error } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Dados Incorretos."} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha ?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={styleBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
