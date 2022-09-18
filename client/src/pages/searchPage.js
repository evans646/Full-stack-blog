import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {SearchBar} from '../components/searchBar';
import {SearchList} from '../interface/searchLists';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [searchListDefault, setSearchListDefault] = useState();
  const [searchList, setSearchList] = useState();

  const fetchData = async () => {
    return await fetch('http://localhost:8080/api/blogs')
      .then(response => response.json())
      .then(data => {
         setSearchList(data) 
         setSearchListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = searchListDefault.filter(blog => {
      return blog.name.toLowerCase().includes(input.toLowerCase())
       
     })
     setInput(input);
     setSearchList(filtered);
  };

  // useEffect( () => {fetchData()},[]);
	
  return (
    <div  className="columns searchColumn">
      <SearchBar 
       input={input} 
       onChange={updateInput}/>
      <button onClick={()=>fetchData()}>Fetch</button>
      <SearchList searchList={searchList}/>
    </div>
   );
};

export default SearchPage