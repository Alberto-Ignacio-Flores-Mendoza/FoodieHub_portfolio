import React from 'react'
import  {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {

    let params = useParams();   
    const [details,setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions')

    const fetchDetails = async()=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json();
        setDetails(detailData);

    }

    useEffect(()=>{
        fetchDetails();

    },[params.name])

  return (
    <div className="DetailWrapper">

        <div className='image-container'>
            <h2>{details.title}</h2>
            <div className='img-container'>
            <img src={details.image} alt={details.title}></img>
            </div>
        </div>
        
        <div className='info'>
        
        <div className='btn-container'>
            <div  className={activeTab === 'instructions' ? 'active button ' : 'button'} onClick={()=> setActiveTab("instructions")}>Instructions</div>
            <div  className={activeTab === 'ingredients' ? 'button active' : 'button'} onClick={()=> setActiveTab("ingredients")}>Ingredients</div>
        </div>

            {activeTab === 'instructions' && (
            <div>
                <h4 dangerouslySetInnerHTML={{__html: details.summary}}></h4>
                <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>

            </div>

        )}
    
            {activeTab === 'ingredients' && (
            <ul>
                {details.extendedIngredients.map((ingredient)=>(
                    <li key={ingredient.id}>{ingredient.name}</li>
                ))}
            </ul>
            )}
        

        </div>
    </div>
)
}

export default Recipe