import { useState } from 'react';

import './Navbar.module.css'

const Navbar = (onSearch) =>{

    const [name, setName] = useState('');

   const handleChange = (event) => {
      setName(event.target.value)

   }

   return (
      <div className={styledSearch.divContent}>
         <input type='search' onChange={handleChange} value ={name}/>
         <button onClick={() => onSearch(name)}>Buscar</button>
      </div>
   );
    
}

// return (
//     <div>
//         <h1>Esta es la Navbar</h1>
//     </div>
//     )
export default Navbar;