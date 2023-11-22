import React, { useState, useEffect } from "react";
import "./Tarefas.css";

const Tarefas = () => {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [aviso, setAviso] = useState("");

  // Carregar tarefas do localStorage ao inicializar o componente
  useEffect(() => {
    const storedTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(storedTarefas);
  }, []);

  // Atualizar o localStorage sempre que as tarefas mudarem
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      setTarefas([...tarefas, { descricao: input, concluida: false }]);
      setInput("");
      setAviso("");
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
        <p className="aviso">{aviso}</p>
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
