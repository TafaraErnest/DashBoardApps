export default function Side({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="notes_names_div">
      <div className="notes_name_heading">
        <h2>Notes</h2>
        <button onClick={onAddNote}>Add Note</button>
      </div>

      {sortedNotes.map((note) => {
        return (
          <div
            key={note.id}
            className={`note_side ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="note_top_heading">
              <strong className="note_title">{note.title}</strong>
              <img
                src="../../../images/close.png"
                alt="..."
                className="icon del_icon"
                onClick={() => onDeleteNote(note.id)}
              />
            </div>
            <small className="note_date">
              Last modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        );
      })}
    </div>
  );
}
