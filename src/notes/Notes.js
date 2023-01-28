import "./styles/notes.css";
import { useContext, useState, useEffect } from "react";
import { ShowTabContext } from "../ShowTabContext";
import Side from "./components/Side";
import Main from "./components/Main";
import { nanoid } from "nanoid";

export default function Notes() {
  const appsTab = useContext(ShowTabContext);
  const [activeNote, setActiveNote] = useState(false);

  // Get notes from local storage
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Adding a new note
  const onAddNote = () => {
    const newNote = {
      id: nanoid(),
      title: "New note",
      content: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  // Updating the current note
  const onUpdateNote = (updatedNote) => {
    const updateNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updateNotesArray);
  };

  // Deleting a note
  const onDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    appsTab.notes && (
      <div className="notes_page">
        <Side
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </div>
    )
  );
}
