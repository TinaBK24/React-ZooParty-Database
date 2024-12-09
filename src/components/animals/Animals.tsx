import Animal from "../animal/Animal";
import "./Animals.css"
import { animals, TAnimal } from '../../../types/TAnimal';

const Animals = () => {
    return ( 
        <section>
            <h1>ZooPartyDB</h1>
            <p>Explore the fascinating world of zoo animals</p>
            <div className="animals-container">
            {animals.map((animal: TAnimal, index) => (
                <Animal key={index} singleAnimal={animal} />
        ))}
            </div>
        </section>
     );
}
 
export default Animals;