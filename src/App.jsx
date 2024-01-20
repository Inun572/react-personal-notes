import React, { useEffect, useState } from 'react';
import { getInitialData } from './utils';

import Layout from './layout';
import NoteInput from './components/NoteInput';
import NoteActiveSection from './components/NoteActiveSection';
import NoteArchiveSection from './components/NoteArchiveSection';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    onChangeSearch;
  });

  const onTitleChange = (e) => {
    setTitle(e.target.value.slice(0, 50));
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body: content,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setTitle('');
    setContent('');
  };

  const onArchiveHandler = (e) => {
    const note = notes.find((note) => note.id == e.target.parentElement.id);
    note.archived = !note.archived;
    setNotes((prevNotes) => {
      return [...prevNotes];
    });
  };

  const onDeleteNoteHandler = (e) => {
    const filter = notes.filter(
      (note) => note.id !== Number(e.target.parentElement.id)
    );
    setNotes([...filter]);
  };

  const onChangeSearch = (title) => {
    if (title !== '') {
      const search = notes.filter((note) => {
        return note.title.toLowerCase().includes(title.toLowerCase());
      });

      if (search.length < 1) {
        setResult([]);
      } else {
        setResult(search);
      }
    } else {
      setResult(notes);
    }
  };

  return (
    <>
      <Layout onSearch={onChangeSearch}>
        <NoteInput
          title={title}
          content={content}
          onTitleChange={onTitleChange}
          onContentChange={onContentChange}
          onSubmit={onSubmit}
        />
        <NoteActiveSection
          notes={result.length < 1 ? notes : result}
          onDelete={onDeleteNoteHandler}
          onArchiveToggle={onArchiveHandler}
        />
        <NoteArchiveSection
          notes={result.length < 1 ? notes : result}
          onDelete={onDeleteNoteHandler}
          onArchiveToggle={onArchiveHandler}
        />
      </Layout>
    </>
  );
};

export default App;
