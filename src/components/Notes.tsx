import * as React from 'react';
import { Note } from '../models/note.model';

interface INotesProps {
    note: Note
}

const Notes: React.FC<INotesProps> = ({note}) => {
  return (

  <>
    <div className="card" style={{width: '18rem'}}>
    <div className="card-body">
      <h5 className="card-title">{note.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{note.date}</h6>
      <p className="card-text">{note.text}</p>
      <button className='mb-3 btn btn-danger'>Delete</button> 
    </div>
  </div>
  </>

  );
};

export default Notes;
