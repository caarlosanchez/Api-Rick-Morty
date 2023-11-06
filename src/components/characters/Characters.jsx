
import './characters.css'

const Characters = ({characters}) => {
  return (
    <>
    
    <div className="row">
        {
            characters.map((character, index) => (
                <div key={index} className="column">
                    <div className="card">
                        <img src={character.image} alt="" />
                        <div className="card-body">
                            <h5>{character.name}</h5>
                            <p>species: {character.species}</p>
                            <p>location: {character.location.name}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        
      
    </div>
    </>
  )
}

export default Characters
