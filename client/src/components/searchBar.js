
import React from 'react';

export function SearchBar  ({keyword,setKeyword})  {
  return (
   <section  className="search">
  <span>
  <fieldset>
    <input 
     key="random1"
     type="text"
     name="search"
     value={keyword}
     placeholder="search country"
     onChange={(e) => setKeyword(e.target.value)}
    />
    </fieldset>
  </span>
   </section>
  );
}



// <section className="search">
// <form>
//   <fieldset>
//     <input
//       type="text"
//       name="search"
//       placeholder="Search..."
//       value={keyword}
//       maxLength="100"
//       onChange={(e) => setKeyword(e.target.value)}
//     />
//   </fieldset>
  
//   <fieldset>
//     <button type="submit" className="btn1">
//       <BsSearch style={{fontSize:'1em'}}/>
//     </button>
//   </fieldset>