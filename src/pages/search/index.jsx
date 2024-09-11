import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/layout/layout";
import SearchInput from "./components/input";
import SearchButton from "./components/button";

export default function SearchPage() {
  return (
    <>
      <Layout>
        <SearchInput />
        <SearchButton />
        <Link to="/weather">or your local weather</Link>
      </Layout>
    </>
  );
}
