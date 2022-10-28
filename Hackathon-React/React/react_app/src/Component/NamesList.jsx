import axios from "axios";
const NamesList = ({ Names, fetchNames }) => {
    console.log(Names);

    function deleteName(id) {
        axios.delete("http://localhost:4000/remove/" + id )
            .then(() => fetchNames())
            .catch(err => console.error(err));
    }

    return (
        <ul className="previousSearch">
            {
                Names.map((Name, i) =>
                    <p key={i}>
                        <button onClick={() => deleteName(i)}>x</button>
                        {' '}
                        {Name}
                    </p>
                )
            }
        </ul>
    );
}
export default NamesList;