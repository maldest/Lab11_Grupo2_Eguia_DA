const express = require("express");
const app = express();
app.use(express.json()); // Permite leer JSON

let productos = [
    { id: 1, nombre: "Laptop", precio: 3500 },
    { id: 2, nombre: "Mouse", precio: 50 }
];

let clientes = [
    { id: 1, nombre: "Juan Pérez" },
    { id: 2, nombre: "María López" }
];

// ENDPOINTS PARA PRODUCTOS
// GET obtener todos
app.get("/productos", (req, res) => {
    res.json(productos);
});

// POST crear nuevo
app.post("/productos", (req, res) => {
    const nuevo = req.body;
    productos.push(nuevo);
    res.status(201).json({ mensaje: "Producto creado", data: nuevo });
});

// PUT editar
app.put("/productos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const datos = req.body;

    productos = productos.map(p => p.id === id ? { ...p, ...datos } : p);

    res.json({ mensaje: "Producto actualizado" });
});

// DELETE eliminar
app.delete("/productos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    productos = productos.filter(p => p.id !== id);
    res.json({ mensaje: "Producto eliminado" });
});

// ENDPOINTS PARA CLIENTES
// GET
app.get("/clientes", (req, res) => {
    res.json(clientes);
});

// POST
app.post("/clientes", (req, res) => {
    const nuevo = req.body;
    clientes.push(nuevo);
    res.status(201).json({ mensaje: "Cliente creado", data: nuevo });
});

// PUT
app.put("/clientes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const datos = req.body;

    clientes = clientes.map(c => c.id === id ? { ...c, ...datos } : c);

    res.json({ mensaje: "Cliente actualizado" });
});

// DELETE
app.delete("/clientes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    clientes = clientes.filter(c => c.id !== id);
    res.json({ mensaje: "Cliente eliminado" });
});

// Servidor
app.listen(3000, () => {
    console.log("API corriendo en http://localhost:3000");
});
