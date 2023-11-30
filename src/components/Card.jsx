const Card= ({person})=>{

    return(

        <div
          
        >
            
            <h1>{person.fullName}</h1>
            <h2>{person.bio}</h2>
            <img src={person.imgSrc} alt={person.fullName} />
            <h4>{person.profession}</h4>
            <span>{person.shows}</span>

            
        </div>
    )
}

export default Card 