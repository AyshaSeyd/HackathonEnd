import { useState } from 'react';
import NamesList from './NamesList';

const AddNames = () => {
    const [Name, setName] = useState ("");
    const submitHandler = (e) => {
        e.preventDefault()
    }
    const newName = (e) => {
        setName(e.target.value)
    }
    const handleAdd = (e) => {
        
    }
    return (
        <form onSubmit={submitHandler}>
            <input
            placeholder="Enter Name:"
            type="text"
            onChange={newName}
            />
            <button
            type="button"
            onClick={handleAdd}>
                AddName
            </button>
        </form>
  );
};
export default AddNames;