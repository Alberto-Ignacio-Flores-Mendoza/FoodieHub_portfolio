import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Search = () => {

   const [input, setInput] = useState("") 
   const navigate = useNavigate();
   
   const submitHandler =(e)=>{

    e.preventDefault();
    navigate('/searched/'+input)
    console.log(input)

}

return (
  

    <form className="search-box" onSubmit={submitHandler}>
        <input onChange={(e)=> setInput(e.target.value)} type= "text" value={input}/>
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
    </form> 

    )
}

export default Search