import React, { useState } from "react";
import Navbar from "./Navbar";
import NewsBoard from "./NewsBoard";

const NewsApp = () => {
  const [category, setCategory] = useState("Technology");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default NewsApp;
