
import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './Notes';
import {v4 as uuidv4} from 'uuid';  

interface INoteListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}



const NoteList: React.FC<INoteListProps> = ({notes,setNotes}) => {
    const handleDelete = (id: string) =>{
        console.log('Note deleted id: ',id)

        setNotes(notes.filter(note=> note.id !== id))
    }
    const renderNotes = () =>{
        return notes.map(note=>(
            <Notes key={uuidv4()} note={note} handleDelete={()=> {handleDelete(note.id)}} />
        ))
    }
  return (
    <>
        <h2 className='mt-3'>Notes</h2>
        <div className='row'>
         
                 {renderNotes()}
     
        </div>
    </>
  );
};

export default NoteList;
