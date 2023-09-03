import React from 'react'

const ImproveSkills = () => {

  const list = [
        "Learn new recepies",
        "Experiment with food",
        "Know nutrition facts",
        "Get cooking tips",
        "Recipes from all over",
        

  ]


  return (
  <div className="section improve-skills">

            <div className="col img">
                <img src='./img/gallery/img_10.jpg' alt=''></img>
            </div>


            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                {
                  list.map((item,index)=>(
                    <p className='skill-item' key={index}>{item}</p>
                  ))
                }
            </div>
            
        </div>  
        
        )
}

export default ImproveSkills