import { TAnimal } from "../../../types/TAnimal";
import "./Animal.css"

type TSingleAnimal = {
    singleAnimal: TAnimal
}

const Animal: React.FC<TSingleAnimal> = (props) => {
    return ( 
        <article className="animal-card">
            <div className="animal-info">
                <p className="animal-emoji">{props.singleAnimal.emoji}</p>
                <h2>{props.singleAnimal.name}</h2>
                <p>{props.singleAnimal.species}</p>
                <p>{props.singleAnimal.habitat}</p>
                <p>{props.singleAnimal.diet}</p>
                <p>{props.singleAnimal.lifespan} years</p>
            </div>
            <div className="fun-facts">
                <ul>
                    {props.singleAnimal.funFacts.map((funFact, index) => (
                        <li key={index}>{funFact}</li>
                    ))}
                </ul>
            </div>
        </article>
     );
}
 
export default Animal;