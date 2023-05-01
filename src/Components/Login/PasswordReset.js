import React, { useEffect, useState } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import UseForm from "../../Hooks/UseForm";
import UseFetch from "../../Hooks/UseFetch";
import { PASSWORD_RESET } from "../../api";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

const PasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const { loading, error, request } = UseFetch();
  const password = UseForm();
  const navigate = useNavigate();

  useEffect(() => {
    const paramns = new URLSearchParams(window.location.search);
    const key = paramns.get("key");
    const login = paramns.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login: login,
        key: key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Resete a senha" />
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          label="Nova senha"
          name="senha"
          {...password}
        ></Input>
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default PasswordReset;
