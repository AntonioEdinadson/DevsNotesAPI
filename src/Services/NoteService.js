const db = require("../DB/database");

module.exports = {
  GetAll() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM notes", (err, result) => {
        if (err) reject(err);

        if (result.length <= 0) {
          reject(new Error("SEM RESULTADOS"));
        } else {
          resolve(result);
        }
      });
    });
  },

  GetNote(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM notes WHERE id = ?", id, (err, result) => {
        if (err) reject(err);

        if (result.length <= 0) {
          reject(new Error("SEM RESULTADOS"));
        } else {
          resolve(result);
        }
      });
    });
  },

  CreateNote(title, body) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO notes (title, body) VALUES(?, ?)",
        [title, body],
        (err, result) => {
          if (err) reject(err);
          resolve(result.insertId);
        }
      );
    });
  },

  EditNote(title, body, id) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE notes SET title = ?, body = ? WHERE id = ?",
        [title, body, id],
        (err, result) => {
          if (err) reject(err);
          resolve(result.insertId);
        }
      );
    });
  },

  DelNote(id) {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM notes WHERE id = ?",
        id,
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  },
};
