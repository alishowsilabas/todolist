import React, { useState } from "react";

function Nome({ nomeAluno }) {
  const [aluno, setNomeAluno] = useState("Nome Genérico");
  function handleChangeName(nome) {
    setNomeAluno(nome);
  }

  return (
    <div>
      <h1>Aluno: {nomeAluno}</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName("Baltazar da Silva")}>Mudar Nome</button>
    </div>
  );
}

export default Nome;
