
import { useRef, useState } from 'react'
import { Note } from '../models/note.model';
import { v4 as uuidv4 } from 'uuid';


interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({notes,setNotes}) => {
    const [error,setError] = useState<string>('')
    const titleRef = useRef<HTMLInputElement | null>(null);
    const descRef = useRef<HTMLInputElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();
        if(titleRef.current?.value === "" || descRef.current?.value === "" || colorRef.current?.value === ""){
       
            setError('All fields are mandatory');
            return;
        }

        setNotes([...notes,{
            id: uuidv4(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (descRef.current as HTMLInputElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: new Date().toString()
            
        }]);

        (titleRef.current as HTMLInputElement).value = "";
        (descRef.current as HTMLInputElement).value = "";

        setError("");
    }
    return (
        <>
            {error &&     <div className="alert alert-warning" role="alert">
                {error}
</div>}
            <h2>Create Notes</h2>
            <form onSubmit={(e)=>{handleSubmit(e)}}>

                <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" ref={titleRef} className="form-control" id="title" placeholder="Title" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="desc">Text</label>
                    <input type="text" ref={descRef} className="form-control" id="desc" placeholder="desc" />
                </div>
                <div className="form-group">
                    <label htmlFor="color">Color </label>
                    <input type="color" ref={colorRef} className='d-block' id="color" defaultValue="#006699" placeholder="color" />
                </div>
                <button type="submit" className="btn btn-primary my-3">Create Note</button>
            </form>
        </>
    );
};

export default CreateNotes;
