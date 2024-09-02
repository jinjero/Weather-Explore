import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <p>LOOK UP THE WEATHER IN THE CITY</p>
        <hr />
      </div>
      <div>
        <Link to="/location">
          <button>your location</button>
        </Link>
        <div>Weather</div>
        <div>Explore</div>
        <button>city search</button>
      </div>
      <img src="image/seasons-item.png" alt="seasons item" />
    </>
  );
}

export default App;
