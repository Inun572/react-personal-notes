import React from 'react';
import { showFormattedDate } from '../utils';

const Notelist = ({ notes, isArchived, onArchiveToggle, onDelete }) => {
  const filter = notes.filter((note) => note.archived === isArchived);
  return (
    <div className="notes-list">
      {filter.map((note) => {
        return (
          <div className="note-item" key={note.id}>
            <div className="note-item__content">
              <h3 className="note-item__title">{note.title}</h3>
              <p className="note-item__date">
                {showFormattedDate(note.createdAt)}
              </p>
              <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action" id={note.id}>
              <button
                className="note-item__delete-button"
                onClick={(e) => onDelete(e)}
              >
                Delete
              </button>
              {!note.archived ? (
                <button
                  className="note-item__archive-button"
                  onClick={onArchiveToggle}
                >
                  Archive
                </button>
              ) : (
                <button
                  className="note-item__archive-button"
                  onClick={onArchiveToggle}
                >
                  Unarchive
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notelist;
