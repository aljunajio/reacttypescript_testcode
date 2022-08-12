import * as React from 'react';
import { Note } from '../models/note.model';

interface INotesProps {
    note: Note
    handleDelete: (id: string) => void
}

const Notes: React.FC<INotesProps> = ({note,handleDelete}) => {
  return (

    <div className='col-md-6'>
        <div className='mb-3'>
    <div className="card" style={{color: note.color}} >
    <div className="card-body">
      <h5 className="card-title">{note.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{note.date}</h6>
      <p className="card-text">{note.text}</p>
      <button className='mb-3 btn btn-danger' onClick={()=>{handleDelete(note.id)}}>Delete</button> 
    </div>
  </div>
  </div>
    </div>

  );
};

export default Notes;
