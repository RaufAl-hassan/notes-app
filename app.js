const yargs = require("yargs");
const notes = require("./notes");

// add note
yargs.command({
  command: "add",
  describe: "Add Notes",
  builder: {
    title: { describe: "Note title", demandOption: true, type: "string" },
    body: { describe: "Note body", demandOption: true, type: "string" },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// remove note
yargs.command({
  command: "remove",
  describe: "remove notes",
  builder: {
    title: { describe: "Note title", demandOption: true, type: "string" },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// list note
yargs.command({
  command: "list",
  describe: "list notes",
  handler() {
    notes.listNotes();
  },
});

// read note
yargs.command({
  command: "read",
  describe: "read notes",
  builder: {
    title: { describe: "Note title", demandOption: true, type: "string" },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
