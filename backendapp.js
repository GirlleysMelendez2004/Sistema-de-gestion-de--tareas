javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/taskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB')).catch(err => console.error(err));

// Modelo de Tareas
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    isCompleted: { type: Boolean, default: false },
    dueDate: { type: Date }
});

const Task = mongoose.model('Task', TaskSchema);

// Rutas
// Obtener todas las tareas
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Crear una nueva tarea
app.post('/tasks', async (req, res) => {
    const { title, description, dueDate } = req.body;
    const task = new Task({ title, description, dueDate });
    await task.save();
    res.json(task);
});

// Editar una tarea
app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, isCompleted, dueDate } = req.body;
    const task = await Task.findByIdAndUpdate(id, { title, description, isCompleted, dueDate }, { new: true });
    res.json(task);
});

// Eliminar una tarea
app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Tarea eliminada' });
});

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

