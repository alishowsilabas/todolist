import React, { useState } from "react";
import "./App.css"

const Form = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    alert("Usuário Registrado com sucesso!")
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    });
  }

  return (
    <div className="form">
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="Nome">Nome: </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Idade">Idade: </label>
          <input
            type="text"
            placeholder="Digite sua idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Email">Email: </label>
          <input
            type="text"
            placeholder="Digite seu melhor email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Registrar</button>
      </form>
      <div className="bemVindo">
        <div>Bem vindo: {user.nome}</div>
        <div>Idade: {user.idade}</div>
        <div>Email: {user.email}</div>
      </div>
    </div>
  );
};

export default Form;
