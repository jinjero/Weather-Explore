import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Layout from "../../components/layout/layout";
import styles from "./style.module.css";

export default function SearchPage() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  const inputCity = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city) {
      localStorage.setItem("searchedCity", city);
      navigate(`/search/${city}`);
    }
  };

  return (
    <div className={styles.search}>
      <Layout>
        <div className={styles.content}>
          <div className={styles.input}>
            <input
              className={styles.typing}
              type="input"
              placeholder="Type the city..."
              onChange={inputCity}
              value={city}
            />
            <button className={styles.button} onClick={handleSearch}>
              ⌕
            </button>
          </div>
          <Link className={styles.local} to="/weather/location">
            or your local weather
          </Link>
        </div>
      </Layout>
    </div>
  );
}
