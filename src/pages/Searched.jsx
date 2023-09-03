import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import RecipeCard from "../components/RecipeCard"


const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    }

    useEffect(()=>{
        getSearched(params.search);
    }, [params.search])

  return (
    <div className='recipes-container'>
        {
            searchedRecipes.map((recipe,index)=>{
                return(
                
                <Link to={"/recipe/" +recipe.id}>
                <RecipeCard key={index} recipe={recipe} />

                </Link>
                )
            })

        }
    </div>
  )
}




export default Searched