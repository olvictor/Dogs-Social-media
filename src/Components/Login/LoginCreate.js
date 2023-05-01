import React from "react";
import { useContext } from "react";
import { USER_POST } from "../../api";
import UseFetch from "../../Hooks/UseFetch";
import UseForm from "../../Hooks/UseForm";
import { UserContext } from "../../UserContext";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginCreate = () => {
  const username = UseForm();
  const email = UseForm("email");
  const password = UseForm();
  const { url, options } = USER_POST({
    username: username.value,
    email: email.value,
    password: password.value,
  });
  const { userLogin } = useContext(UserContext);

  const { request, loading, error } = UseFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { response } = await request(url, options);
    console.log(response);
    if (response.ok) userLogin(username.value, password.value);
  };

  return (
    <div className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" {...username} />
        <Input label="Email" type="email" {...email} />
        <Input label="Senha" type="password" {...password} />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </div>
  );
};

export default LoginCreate;
