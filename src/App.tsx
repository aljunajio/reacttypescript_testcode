import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NoteList from './components/NoteList';
import { Note } from './models/note.model';
import { v4 as uuidv4 } from 'uuid';
import CreateNotes from './components/CreateNote';




function App() {
  const [notes,setNotes] = useState<Note[]>([
    {
    id: uuidv4(),
    title: "Meeting",
    text: "Schedule meeting with UI/UX Team",
    color: "#006937",
    date: new Date().toString()
  },
  {
    id: uuidv4(),
    title: "Meeting",
    text: "Schedule meeting with Developer Team",
    color: "#006699",
    date: new Date().toString()
  }
]);

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <CreateNotes notes={notes} setNotes={setNotes} />
            <NoteList notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
