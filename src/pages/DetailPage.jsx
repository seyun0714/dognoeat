import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import foodData from "../database/dognoeat.json";
import { useSearchParams } from "react-router-dom";

export default function DetailPage() {
  const data = useState(foodData);
  const [filteredData, setFilteredData] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fda = data[0].filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(fda);
  }, [query]);

  return (
    <div className="page-wrapper">
      <Header></Header>
      <div className="detail-content-wrapper">
        <SearchBar type={"detail"} query={query}></SearchBar>
        <div className="detail-search-list">
          {filteredData.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
