import { Link } from "react-router-dom";
import Layout from "../../components/layout/layout";

import SeasonItem from "../../assets/seasons-item.svg?react";

export default function HomePage() {
  return (
    <>
      <Layout>
        <Link to="/weather">
          <button>YOUR LOCATION</button>
        </Link>
        <Link to="/search">
          <button>CITY SEARCH</button>
        </Link>
        <SeasonItem width="1200" height="400" />
      </Layout>
    </>
  );
}
