const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// node --inspect-brk program.js


const saveNote = (notes) => {
  notes = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notes);
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    const newNote = { title, body };
    notes.push(newNote);
    saveNote(notes);
    console.log(chalk.green.inverse("Note Added"));
    return;
  } else {
    console.log(chalk.red.inverse("Title Taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);

  if (notes.length === newNotes.length) {
    console.log(chalk.red.inverse("No note removed"));
  } else {
    console.log(chalk.green.inverse("Note removed"));
    saveNote(newNotes);
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    console.log(chalk.inverse("No notes fonud"));
  } else {
    console.log(chalk.inverse("Your Notes:"));
    notes.forEach((note, i) => {
      console.log(`${i + 1}: ${note.title}`);
    });
  }
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);
  console.log(chalk.inverse("Your Note:"));
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = { addNote, removeNote, listNotes, readNote };
