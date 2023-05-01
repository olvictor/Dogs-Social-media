import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import UseForm from "../../Hooks/UseForm";
import UseFetch from "../../Hooks/UseFetch";
import { PASSWORD_LOST } from "../../api";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const PasswordLost = () => {
  const login = UseForm();
  const { data, request, loading, error } = UseFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const json = await request(url, options);
      console.log(json);
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <h3 style={{ color: "#4c1" }}>{data}</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Email / Usuário"
            name="login "
            {...login}
          ></Input>
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Recuperar Senha</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default PasswordLost;
