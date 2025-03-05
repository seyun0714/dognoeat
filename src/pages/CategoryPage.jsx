import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CategoryMenu from "../components/CategoryMenu";
import Footer from "../components/Footer";
import foodData from "@data/dognoeat.js";
import NotFound from "../components/NotFound";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";
import "./styles/pages.css";

export default function CategoryPage() {
  const data = useState(foodData);
  const [filteredData, setFilteredData] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryid = searchParams.get("id");

  useEffect(() => {
    const fda = data[0].filter(
      (item) => item.category === parseInt(categoryid)
    );
    const sortedFda = fda.sort((a, b) => a.name.localeCompare(b.name, "ko"));
    setFilteredData(sortedFda);
  }, [categoryid]);

  return (
    <div className="page-wrapper">
      <Header></Header>
      <div className="category-content-wrapper">
        <div className="category-nav">
          <CategoryMenu id={1} isActive={categoryid === "1"}></CategoryMenu>
          <CategoryMenu id={2} isActive={categoryid === "2"}></CategoryMenu>
          <CategoryMenu id={3} isActive={categoryid === "3"}></CategoryMenu>
          <CategoryMenu id={4} isActive={categoryid === "4"}></CategoryMenu>
        </div>
        {filteredData.length === 0 ? (
          <NotFound query={categoryid} type={"category"}></NotFound>
        ) : (
          <div className="category-search-list">
            {filteredData.map((item) => (
              <Card
                title={item.name}
                description={item.description}
                isOkay={item.isOkay}
                key={item.id}
              ></Card>
            ))}
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
