import React, { useState } from "react";
import "./Tarefas.css";

const Tarefas = () => {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [aviso, setAviso] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      // .trim(): é um método de strings em JavaScript que remove os espaços em branco do início e do final da string.
      setTarefas([...tarefas, { descricao: input, concluida: false }]);
      setInput(""); // limpa o campo input anterior
      setAviso(""); // Limpa o campo aviso se houver aviso anterior
    } else {
      setAviso("Não é possível registrar uma tarefa vazia.");
    }
  }

  function handleCheckBoxToggle(index) {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  }

  return (
    <div className="addTarefa">
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="Tarefa">Adicione uma tarefa diária: </label>
          <input
            type="text"
            placeholder="Digite uma tarefa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button type="submit">Registrar Tarefa</button>
      </form>
      <div className="listaTarefas">
        <p>{aviso}</p>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              <label className="container">
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => handleCheckBoxToggle(index)}
                />
                <span className="checkmark"></span>
                {tarefa.descricao}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tarefas;
