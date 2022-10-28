import { useState } from 'react';
import axios from "axios";

const AddNames = ({ fetchNames }) => {
    const [Name, setName] = useState ("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/add/' + Name).then((response) => {
            console.log('success', response.data)
            fetchNames();
            setName("");
        }).catch(err => console.error('error'))
    }

    return (
        <form onSubmit={submitHandler}>
            <input
            placeholder="Enter Name:"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">
                Add
            </button>
        </form>
  );
};
export default AddNames;