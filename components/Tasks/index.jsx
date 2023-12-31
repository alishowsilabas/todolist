import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss"

const Tasks = () => {
    const [input, setInput] = useState("");
    const [tarefas, setTarefas] = useState([]);
    const [aviso, setAviso] = useState("");

    useEffect(() => {
        console.log("Carregando tarefas do localStorage...");
        const storedTarefas = JSON.parse(localStorage.getItem("@tarefas")) || [];
        console.log("Tarefas carregadas:", storedTarefas);
        setTarefas(storedTarefas);
    }, []);

    useEffect(() => {
        console.log("Atualizando localStorage...");
        localStorage.setItem("@tarefas", JSON.stringify(tarefas));
        console.log("Tarefas atualizadas:", tarefas);
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
        <div className={styles.addTarefa}>
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
            <div className={styles.listaTarefas}>
                <p className={styles.aviso}>{aviso}</p>
                <ul>
                    {tarefas.map((tarefa, index) => (
                        <li key={index}>
                            <label className={styles.container}>
                                <input
                                    type="checkbox"
                                    checked={tarefa.concluida}
                                    onChange={() => handleCheckBoxToggle(index)}
                                />
                                <span className={styles.checkmark}></span>
                                {tarefa.descricao}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Tasks;
