
import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './Notes';

interface INoteListProps {
    notes: Note[]
}



const NoteList: React.FC<INoteListProps> = ({notes}) => {
    const renderNotes = () =>{
        return notes.map(note=>(
            <Notes key={note.id} note={note} />
        ))
    }
  return (
    <>
        <h2 className='mt-3'>Notes</h2>
        <div>{renderNotes()}</div>
    </>
  );
};

export default NoteList;
