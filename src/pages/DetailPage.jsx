import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import foodData from "../database/dognoeat.json";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";

export default function DetailPage() {
  const data = useState(foodData);
  const [filteredData, setFilteredData] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fda = data[0].filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    const startsWithQuery = fda.filter((item) =>
      item.name.toLowerCase().startsWith(query.toLowerCase())
    );
    const contiansQuery = fda.filter(
      (item) => !item.name.toLowerCase().startsWith(query.toLowerCase())
    );
    const sortedStartWith = startsWithQuery.sort((a, b) =>
      a.name.localeCompare(b.name, "ko")
    );
    const sortedContains = contiansQuery.sort((a, b) =>
      a.name.localeCompare(b.name, "ko")
    );
    const combined = [...sortedStartWith, ...sortedContains];
    setFilteredData(combined);
  }, [query]);

  return (
    <div className="page-wrapper">
      <Header></Header>
      <div className="detail-content-wrapper">
        <SearchBar type={"detail"} query={query}></SearchBar>
        <div className="detail-search-list">
          {filteredData.map((item) => (
            <Card
              title={item.name}
              description={"자세한 설명"}
              isOkay={item.isOkay}
              key={item.id}
            ></Card>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
