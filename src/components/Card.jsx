import { useState } from "react"
const Card = ({person})=>{
const [isShown,setIsShown] = useState(person.shows)

const hundleClick = ()=>{
    setIsShown(!isShown)
}

    return (
        <div style={{border:"1px solid black",margin:"20px",backgroundColor:"green"}}>

                {isShown ?
                 <div>
                        <h1>{person.fullName}</h1>
                       <h2>{person.bio}</h2>
                        <h3>{person.profession}</h3>
                        <img src={person.imgSrc} alt={person.fullname} />
                        <button onClick={hundleClick}> show Persone</button>
                 </div>
                  :
                 <div>

                    <p style={{fontSize:"100px"}}>Not Found!!</p>
                    <button onClick={hundleClick}> show Persone</button>

                 </div>

                }

        </div>
    )
}
export default Card