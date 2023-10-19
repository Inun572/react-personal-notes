import React, { useState } from 'react';

const NoteInput = ({
  title,
  content,
  onTitleChange,
  onContentChange,
  onSubmit,
}) => {
  const charLeft = 50 - [...title].length;

  return (
    <section className="note-input">
      <h2>Add Note</h2>
      <form action="" onSubmit={onSubmit}>
        <p className="note-input__title__char-limit">
          Characters left: {charLeft}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Note Title..."
          required
          value={title}
          onChange={onTitleChange}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Type here..."
          required
          value={content}
          onChange={onContentChange}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </section>
  );
};

export default NoteInput;
