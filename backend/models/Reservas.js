const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    deporte: { type: String, required: true },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
});

module.exports = mongoose.model('Reserva', reservaSchema);