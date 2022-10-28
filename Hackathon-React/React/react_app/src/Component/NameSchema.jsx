import { useState } from 'react';
import AddNames from './AddNames';
import NamesList from './NamesList';
import axios from "axios";
import { useEffect } from 'react';

const Names = () => {
    const [Names, setNames] = useState([]);

    const fetchNames = async () => {
        const res = await axios.get("http://localhost:4000/getAll");
        setNames(res.data);
    }

    useEffect(() => { fetchNames() }, []);

    return (
        <>
            <AddNames fetchNames={fetchNames} />
            <NamesList fetchNames={fetchNames} Names={Names} />
        </>
    );
}
export default Names;