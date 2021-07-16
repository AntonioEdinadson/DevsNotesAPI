const express = require('express');
const routes = express.Router();

const NoteController = require('./Controllers/NoteController');

routes.get('/ping', NoteController.ping);

routes.get('/notes', NoteController.GetNotes);
routes.get('/note/:id', NoteController.GetNote);

routes.post('/note', NoteController.CreateNote);

routes.put('/note/:id', NoteController.EditNote);

routes.delete('note/:id', NoteController.DeleteNote);

module.exports = routes;