import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import Search from "../components/Search"

export default function Recipes(){
 const [popular, setPopular] =useState([]);


//calls api on startup
    useEffect(()=>{
        getPopular();
    }, []);



const getPopular = async()=>{


    

    //call the api
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
    const data = await api.json();

    //we can only save strings in local storage
    setPopular(data.recipes);


    
}

    return (
        <div>
            <Search></Search>

        <div className='recipes-container'>
        {
            popular.map((recipe,index)=>{
                return(
                
                <Link to={"/recipe/" +recipe.id}>
                <RecipeCard key={index} recipe={recipe} />

                </Link>
                )
            })

        }
    </div>

            
        </div>
    )
}