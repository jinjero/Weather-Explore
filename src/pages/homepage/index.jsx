import { Link } from "react-router-dom";
import Layout from "../../components/layout/layout";
import FourButton from "./components/button";
import styles from "./style.module.css";

import Spring from "../../assets/home-btn/spring-flowers.svg?react";
import Summer from "../../assets/home-btn/summer-outfits.svg?react";
import Autumn from "../../assets/home-btn/autumn-leaves.svg?react";
import Winter from "../../assets/home-btn/winter-snow.svg?react";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.fourth}>
          <Link to="/weather">
            <FourButton
              svgImage={<Spring style={{ height: "370px" }} />}
              label="1. Your Location"
            />
          </Link>
          <Link to="/search">
            <FourButton
              svgImage={<Summer style={{ height: "370px" }} />}
              label="2. City Search"
            />
          </Link>
          <Link to="/favorite">
            <FourButton
              svgImage={<Autumn style={{ height: "370px" }} />}
              label="3. Favorites"
            />
          </Link>
          <Link to="/logout">
            <FourButton
              svgImage={<Winter style={{ height: "370px" }} />}
              label="4. Logout"
            />
          </Link>
        </div>
      </Layout>
    </div>
  );
}
