import React from 'react';
import Notelist from './Notelist';

const NoteArchiveSection = ({ notes, onDelete, onArchiveToggle }) => {
  return (
    <section>
      <h2>Archived Notes</h2>
      <Notelist
        notes={notes}
        isArchived={true}
        onDelete={onDelete}
        onArchiveToggle={onArchiveToggle}
      />
    </section>
  );
};

export default NoteArchiveSection;
