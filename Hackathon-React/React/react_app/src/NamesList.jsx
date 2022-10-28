const NamesList = ({Names}) => {
    const Display = ({ Name }) => <li>{Name}</li>
    return (
        <ul className="previousSearch">
        {Names.map ((Name, i) => 
            <Display
            Name={Name}
            key={i}
            />
    )}
        </ul>
    );
    }
export default NamesList;