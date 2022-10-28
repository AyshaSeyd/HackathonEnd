// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";


// function Axios() {

//     const [Name, setName] = useState("");
//     const [Names, setNames] = useState();

//     const deleteNames = () => {
//         axios.delete('http://localhost:4000/delete/:id', {
//             Name
//         }).then((response) => {
//             console.log('success', response.data)
//             // setData(deleteData);
//         }).catch(err => console.error('error'))
//     }

//     const fetchNames = async () => {
//         try {
//             const res = axios.get('http://localhost:4000/getAll');
//             setNames(res.data);
//             console.log('Names Fetched')
//         } catch (err) {
//             console.error(err);
//         }
//     };
//     useEffect(() => {

//         fetchNames()
//     }, []); // empty brackets -> only runs on first load

//     const patchNames = () => {
//         axios.patch('http://localhost:4000/replace/:id', {
//             Name
//         }).then((response) => {
//             console.log('success', response.data)
//             // setData(postData);
//         }).catch(err => console.error('error'))
//     }

//     return (
//         <div>
//             <form onSubmit={createNames}>
//                 <label>Name</label>
//                 <input name="name"
//                     type="text"
//                     value={Name}
//                     onChange={e => setName(e.target.value)} />
//                 <br />
//                 <button type="submit">Create</button>
//             </form>

//             <form onSubmit={deleteNames}>
//                 <label>Name</label>
//                 <input name="name"
//                     type="text"
//                     value={Name}
//                     onChange={e => setName(e.target.value)} />
//                 <br />
//                 <button onClick={deleteNames}>Delete</button>
//             </form>

//             <form onSubmit={fetchNames}>
//                 <label>Name</label>
//                 <input name="name"
//                     type="text"
//                     value={Name}
//                     onChange={e => setName(e.target.value)} />
//                 <br />
//                 <button onClick={fetchNames}>Get</button>
//             </form>

//             <form onSubmit={patchNames}>
//                 <label>Name</label>
//                 <input name="name"
//                     type="text"
//                     value={Name}
//                     onChange={e => setName(e.target.value)} />
//                 <br />
//                 <button onClick={patchNames}>Update</button>
//             </form>
//         </div>
//     );
// };
// export default Axios;