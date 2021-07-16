const NoteService = require("../Services/NoteService");

module.exports = {
  async GetNotes(req, res, next) {
    let json = { result: [] };

    try {
      let notes = await NoteService.GetAll();

      notes.forEach((element) => {
        json.result.push({
          id: element.id,
          title: element.title,
          body: element.body,
        });
      });

      res.json(json);
    } catch (error) {
      console.log(error.message);
      res.json(json);
    }
  },

  async GetNote(req, res, next) {
    let json = { result: {} };
    let id = req.params.id;

    try {
      let note = await NoteService.GetNote(id);
      json.result = note;
      res.json(json);
    } catch (error) {
      console.log(error.message);
      res.json(json);
    }
  },

  async CreateNote(req, res, next) {
    let json = { result: {} };
    let title = req.body.title;
    let body = req.body.body;

    try {
      let noteId = await NoteService.CreateNote(title, body);

      json.result = {
        id: noteId,
        title,
        body,
      };

      res.json(json);
    } catch (error) {
      console.log(error.message);
      res.json(json);
    }
  },

  async EditNote(req, res, next) {
    let json = { result: {} };
    let id = req.params.id;
    let title = req.body.title;
    let body = req.body.body;

    try {
      await NoteService.EditNote(title, body, id);

      json.result = {
        id,
        title,
        body,
      };

      res.json(json);
    } catch (error) {
      console.log(error.message);
      res.json(json);
    }
  },

  async DeleteNote(req, res, next) {
    let json = { result: {} };
    let id = req.params.id;

    try {
      await NoteService.DelNote(id);

      json.result = { id: id };

      res.json(json);
    } catch (error) {
      console.log(error.message);
      res.json(json);
    }
  },
};
