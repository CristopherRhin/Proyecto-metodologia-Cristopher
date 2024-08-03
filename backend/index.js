const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Reserva = require('./models/Reservas.js');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/deportes', { useNewUrlParser: true, useUnifiedTopology: true });

// Ruta para crear una nueva reserva
app.post('/reservas', async (req, res) => {
  const { nombre, email, telefono, deporte, fecha, hora } = req.body;

  try {
    const nuevaReserva = new Reserva({ nombre, email, telefono, deporte, fecha, hora });
    await nuevaReserva.save();
    res.status(201).json({ message: 'Reserva creada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la reserva', error });
  }
});

// Ruta para obtener todas las reservas
app.get('/reservas', async (req, res) => {
    try {
      const reservas = await Reserva.find();
      res.status(200).json(reservas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las reservas', error });
    }
  });

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});