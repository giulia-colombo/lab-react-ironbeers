/* 
needs to display
- img - name - tagline - contributed_by - LINK TO CHECK DETAILS OF BEER, link should navigate to /beers/:beerId.
*/

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListBeersPage() {
    const headerURL = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
    const apiURL = "https://ih-beers-api2.herokuapp.com/beers"
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get(apiURL)
        .then((response) => {
            console.log(response);
            setBeers(response.data);
        });
    }, [])

    return(
        <>
            <a href="/"><img src={headerURL} alt="header"/></a>
            {beers.map(beer => {
                return(
                   <div key={beer._id}>
                    <img src={beer.image_url} alt={`${beer.name}img`} />
                    <Link to={`/beers/${beer._id}`}>
                    {beer.name}
                    </Link>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                   </div> 
                );
            })}

        </>
    )

}

export default ListBeersPage;