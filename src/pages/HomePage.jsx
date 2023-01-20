import { Link } from "react-router-dom";

function HomePage () {
    return (
        <div>
            <Link to="/beers">Beers</Link>
            <br />
            <Link to="/random-beer">Random beer</Link>
            <br />
            <Link to="/new-beer">New beer</Link>
        </div>
    );
}
 
export default HomePage;