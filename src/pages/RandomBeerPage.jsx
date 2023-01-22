import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeerPage () {
    const headerURL = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
    const randomBeerApiURL = "https://ih-beers-api2.herokuapp.com/beers/random"
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        axios.get(randomBeerApiURL)
        .then((response) => {
            console.log("Random beer object: ", response.data)
            setBeer(response.data);
        })
    },[])
 //THEN: CONDITIONAL RRENDERING with if (beer) or not
    if (beer) {
        return(
            <>
                <a href="/"><img src={headerURL} alt="header"/></a>
                <img src={beer.image_url} alt="beer-img" />
                <h1>{beer.name}</h1>
                <h5>{beer.tagline}</h5>
                <ul>
                    <li>First brewed: {beer.first_brewed}</li>
                    <li>Attenuation level: {beer.attenuation_level}</li>
                    <li>Description: {beer.description}</li>
                    <li>Contributed by: {beer.contributed_by}</li>
                </ul>
            </>
        )
    }
}

export default RandomBeerPage;