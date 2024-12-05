javascript
import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:5000';

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Cargar tareas desde el backend
    useEffect(() => {
        fetch(`${API_URL}/tasks`)
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, []);

    // Crear una nueva tarea
    const createTask = async () => {
        const newTask = { title, description };
        const res = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask),
        });
        const data = await res.json();
        setTasks([...tasks, data]);
        setTitle('');
        setDescription('');
    };

    // Marcar como completada
    const toggleComplete = async (id, isCompleted) => {
        const res = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isCompleted: !isCompleted }),
        });
        const updatedTask = await res.json();
        setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
    };

    // Eliminar tarea
    const deleteTask = async (id) => {
        await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
        setTasks(tasks.filter((task) => task._id !== id));
    };

    return (
        <div className="App" style={{ padding: '20px' }}>
            <h1>Gestión de Tareas</h1>
            <div>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={createTask}>Agregar Tarea</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id} style={{ margin: '10px 0' }}>
                        <strong>{task.title}</strong>
                        <p>{task.description}</p>
                        <button onClick={() => toggleComplete(task._id, task.isCompleted)}>
                            {task.isCompleted ? 'Marcar como pendiente' : 'Marcar como completada'}
                        </button>
                        <button onClick={() => deleteTask(task._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

