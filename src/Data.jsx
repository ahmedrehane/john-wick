import React, { useState } from 'react';

const Data = ({person}) =>{
  const[currentPerson, setCurrentPerson] = useState([person])

const MasqueAffiche =() =>{
  setCurrentPerson(!currentPerson)
}
return(
  <div>
    <button onClick={MasqueAffiche}>
      {currentPerson ? 'Masquer image' : 'Afficher image'}
      </button>
      {currentPerson && <img src={person.imgSrc} alt={person.fullName} />}



  </div>
)


}
export default Data