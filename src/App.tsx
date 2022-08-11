import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NoteList from './components/NoteList';

import { Note } from './models/note.model';




function App() {
  const titleText: string = "This is the title"
  const [notes,setNotes] = useState<Note[]>([{
    id: new Date().toString(),
    title: "Meeting",
    text: "Schedule meeting with UI/UX Team",
    color: "#dfdfdf",
    date: new Date().toString()
  }]);

  return (
    <div className="App container">
      <Header />
      <div className='container'>
            <div className='row'>
                <div className='col-12 mt-5'>
                    <NoteList notes={notes} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
