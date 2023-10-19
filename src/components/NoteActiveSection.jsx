import React from 'react';
import Notelist from './Notelist';

const NoteActiveSection = ({ notes, onDelete, onArchiveToggle }) => {
  return (
    <section>
      <h2>Active Notes</h2>
      <Notelist
        notes={notes}
        isArchived={false}
        onDelete={onDelete}
        onArchiveToggle={onArchiveToggle}
      />
    </section>
  );
};

export default NoteActiveSection;
