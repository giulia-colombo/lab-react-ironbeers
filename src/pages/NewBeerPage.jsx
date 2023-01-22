import axios from "axios";
import { useState } from "react"
import { Navigate } from "react-router-dom";
 
function NewBeerPage (){
    const headerURL = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(""); //must be type Number
    const [contributedBy, setContributedBy] = useState("");

    const handleNameInput = e => setName(e.target.value);
    const handleTaglineInput = e => setTagline(e.target.value);
    const handleDescriptionInput = e => setDescription(e.target.value);
    const handleFirstBrewedInput =  e => setFirstBrewed(e.target.value);
    const handleBrewersTipsInput = e => setBrewersTips(e.target.value);
    const handleAttenuationLevelInput = e => setAttenuationLevel(Number(e.target.value));
    const handleContributedByInput = e => setContributedBy(e.target.value);

/* 
the handleSubmit fn 1) prevents the default behavior of the app reloading AND 2) allows us to
access the data that the user has entered
*/

    const handleSubmit = e => {
        e.preventDefault();
        const newBeer = {name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy};
        console.log("New beer sumbitted: ", newBeer);
        axios.post("ttps://ih-beers-api2.herokuapp.com/beers/new", newBeer)
    }

    return(
        <>
            <a href="/"><img src={headerURL} alt="header"/></a>
            <h4>Add a beer</h4>

            <form onSubmit={handleSubmit}>
                <label>Name
                <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={handleNameInput}
                />
                </label>

                <label>Tagline
                <input 
                    type="text" 
                    name="tagline"
                    value={tagline}
                    onChange={handleTaglineInput}
                />
                </label>

                <label>Description
                <input 
                    type="text" 
                    name="description"
                    value={description}
                    onChange={handleDescriptionInput}
                />
                </label>

                <label>First brewed
                <input 
                    type="text" 
                    name="firstBrewed"
                    value={firstBrewed}
                    onChange={handleFirstBrewedInput}
                />
                </label>

                <label>Brewers tips
                <input 
                    type="text" 
                    name="brewersTips"
                    value={brewersTips}
                    onChange={handleBrewersTipsInput}
                />
                </label>

                <label>Attenuation level
                <input 
                    type="number" 
                    name="attenuationLevel"
                    value={attenuationLevel}
                    onChange={handleAttenuationLevelInput}
                />
                </label>

                <label>Contributed by
                <input 
                    type="text" 
                    name="contributedBy"
                    value={contributedBy}
                    onChange={handleContributedByInput}
                />
                </label>

            <button type="sumbit">Add a beer</button>
            </form>

        </>
    )


}

export default NewBeerPage;