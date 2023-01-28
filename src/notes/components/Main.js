export default function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="no_note">No note selected</div>;
  }

  return (
    <div className="note_content_page">
      <input
        type="text"
        id="title"
        placeholder="Note title..."
        value={activeNote.title}
        onChange={(e) => onEditField("title", e.target.value)}
        autoFocus
      />
      <textarea
        id="body"
        value={activeNote.content}
        onChange={(e) => onEditField("content", e.target.value)}
        placeholder="Write your notes here..."
      ></textarea>
    </div>
  );
}
